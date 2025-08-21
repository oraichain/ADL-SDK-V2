import { IdlAccounts, IdlTypes, Program, BN, AnchorProvider } from '@coral-xyz/anchor';
import { PublicKey, Transaction } from '@solana/web3.js';
import type { DefaiLaunchpad as DefaiLaunchpadTypes } from './idl/defai_launchpad';

export type DefaiLaunchpadProgram = Program<DefaiLaunchpadTypes>;
export type TxBuilder = Promise<Transaction>;

export type PrepareTokenAccountParams = {
  payer: PublicKey;
  tokenMint: PublicKey;
  tokenOwner: PublicKey;
  tokenProgram: PublicKey;
};

export type StakeParams = {
  owner: PublicKey;
  poolTokenMint: PublicKey;
  amount: BN;
  stakeTokenMint: PublicKey;
};

export type UnstakeParams = {
  owner: PublicKey;
  poolTokenMint: PublicKey;
  amount: BN;
  stakeTokenMint: PublicKey;
};

export type SwapParams = {
  user: PublicKey;
  poolTokenMint: PublicKey;
  amountIn: BN;
  direction: boolean; // true: sell, false: buy
  minimumReceiveAmount: BN;
  creator: PublicKey;
  tokenProgram: PublicKey;
};

export type ClaimTokenParams = {
  owner: PublicKey;
  poolTokenMint: PublicKey;
  receiver: PublicKey;
  tokenProgram: PublicKey;
};

export type SimulateSwapParams = {
  provider: AnchorProvider;
  poolTokenMint: PublicKey;
  amountIn: BN;
  direction: boolean; // true: sell, false: buy
};
