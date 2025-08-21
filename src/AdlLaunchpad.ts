import { Connection, Keypair, PublicKey, TransactionInstruction } from '@solana/web3.js';
import {
  DefaiLaunchpadProgram,
  PrepareTokenAccountParams,
  StakeParams,
  SwapParams,
  UnstakeParams,
  ClaimTokenParams,
  SimulateSwapParams,
} from './types';
import DefaiLaunchpadIDL from './idl/defai_launchpad.json';
import { AnchorProvider, BN, IdlAccounts, Program } from '@coral-xyz/anchor';
import type { DefaiLaunchpad, DefaiLaunchpad as DefaiLaunchpadTypes } from './idl/defai_launchpad';
import { getOrCreateATAInstruction } from './helper';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import invariant from 'invariant';
import NodeWallet from '@coral-xyz/anchor/dist/cjs/nodewallet';

export class AdlLaunchpad {
  _program: DefaiLaunchpadProgram;
  private configAccount!: IdlAccounts<DefaiLaunchpad>['config'];

  constructor(connection: Connection) {
    this._program = new Program(DefaiLaunchpadIDL as DefaiLaunchpadTypes, {
      connection,
    });
  }

  private async prepareTokenAccounts(params: PrepareTokenAccountParams): Promise<{
    tokenAta: PublicKey;
    instructions: TransactionInstruction[];
  }> {
    const { payer, tokenMint, tokenOwner, tokenProgram } = params;
    const instructions: TransactionInstruction[] = [];

    const { ataPubkey, ix } = await getOrCreateATAInstruction(
      this._program.provider.connection,
      tokenMint,
      tokenOwner,
      payer,
      true,
      tokenProgram
    );
    ix && instructions.push(ix);

    return {
      tokenAta: ataPubkey,
      instructions,
    };
  }

  // ----------------------------- QUERIES -----------------------------

  async loadConfigAccount() {
    if (!this.configAccount) {
      const [configPda] = PublicKey.findProgramAddressSync(
        [Buffer.from('config')],
        this._program.programId
      );
      const configAccount = await this._program.account.config.fetchNullable(configPda);
      invariant(configAccount, 'Config account not found');
      this.configAccount = configAccount;
    }

    return this.configAccount;
  }

  async loadBondingCurveAccount(
    tokenMint: PublicKey
  ): Promise<IdlAccounts<DefaiLaunchpad>['bondingCurve']> {
    const [bondingCurvePda] = PublicKey.findProgramAddressSync(
      [Buffer.from('bonding_curve'), tokenMint.toBuffer()],
      this._program.programId
    );
    const bondingCurveAccount = await this._program.account.bondingCurve.fetchNullable(
      bondingCurvePda
    );

    invariant(bondingCurveAccount, 'Bonding curve account not found');
    return bondingCurveAccount;
  }

  async getUserInfoByPool(
    user: PublicKey,
    poolTokenMint: PublicKey
  ): Promise<IdlAccounts<DefaiLaunchpad>['stakerInfoV2'] | null> {
    const [stakingVaultPda] = PublicKey.findProgramAddressSync(
      [Buffer.from('staking_vault_v2'), poolTokenMint.toBytes()],
      this._program.programId
    );
    const [stakerInfoPda] = PublicKey.findProgramAddressSync(
      [Buffer.from('staker_info_v2'), stakingVaultPda.toBuffer(), user.toBuffer()],
      this._program.programId
    );
    const stakerInfoAccount = await this._program.account.stakerInfoV2.fetchNullable(stakerInfoPda);

    return stakerInfoAccount;
  }

  async simulateSwap(params: SimulateSwapParams) {
    const { amountIn, direction, poolTokenMint, provider } = params;
    const program = new Program(DefaiLaunchpadIDL as DefaiLaunchpadTypes, provider);

    const result = await program.methods
      .simulateSwap(amountIn, direction ? 1 : 0)
      .accounts({
        tokenMint: poolTokenMint,
      })
      .view();

    return result;
  }

  // ----------------------------- INSTRUCTIONS -----------------------------

  async stakeInstruction(params: StakeParams): Promise<TransactionInstruction> {
    const { owner, poolTokenMint, amount, stakeTokenMint } = params;

    const ix = await this._program.methods
      .stake(amount)
      .accounts({
        signer: owner,
        stakeCurrencyMint: stakeTokenMint,
        rewardCurrencyMint: poolTokenMint,
        tokenProgram: TOKEN_PROGRAM_ID,
      })
      .instruction();

    return ix;
  }

  async unstakeInstruction(params: UnstakeParams): Promise<TransactionInstruction> {
    const { owner, poolTokenMint, amount, stakeTokenMint } = params;

    const ix = await this._program.methods
      .destake(amount)
      .accounts({
        signer: owner,
        stakeCurrencyMint: stakeTokenMint,
        rewardCurrencyMint: poolTokenMint,
        tokenProgram: TOKEN_PROGRAM_ID,
      })
      .instruction();

    return ix;
  }

  async swapPartyInstruction(params: SwapParams) {
    const {
      user,
      poolTokenMint,
      amountIn,
      direction,
      minimumReceiveAmount,
      creator,
      tokenProgram,
    } = params;

    await this.loadConfigAccount();

    const ix = await this._program.methods
      .buyParty(amountIn, direction ? 1 : 0, minimumReceiveAmount)
      .accounts({
        teamWallet: this.configAccount.teamWallet,
        user: user,
        tokenMint: poolTokenMint,
        creatorWallet: creator,
        tokenProgram: tokenProgram,
      })
      .instruction();

    return ix;
  }

  async swapPublicInstruction(params: SwapParams) {
    const {
      user,
      poolTokenMint,
      amountIn,
      direction,
      minimumReceiveAmount,
      creator,
      tokenProgram,
    } = params;

    await this.loadConfigAccount();

    const ix = await this._program.methods
      .swap(amountIn, direction ? 1 : 0, minimumReceiveAmount)
      .accounts({
        teamWallet: this.configAccount.teamWallet,
        user: user,
        tokenMint: poolTokenMint,
        creatorWallet: creator,
        tokenProgram: tokenProgram,
      })
      .instruction();

    return ix;
  }

  async claimTokenInstruction(params: ClaimTokenParams) {
    const { owner, poolTokenMint, receiver, tokenProgram } = params;

    const ix = await this._program.methods
      .claimToken()
      .accounts({
        tokenMint: poolTokenMint,
        payer: owner,
        receiver: receiver,
        tokenProgram: tokenProgram,
      })
      .instruction();

    return ix;
  }
}
