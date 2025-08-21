import { BN } from '@coral-xyz/anchor';
import { Keypair, PublicKey, Transaction } from '@solana/web3.js';
import { Connection } from '@solana/web3.js';
import { AdlLaunchpad } from '../src/AdlLaunchpad';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import bs58 from 'bs58';
import 'dotenv/config';
import { sendTransaction } from './utils';

async function main() {
  const connection = new Connection('https://api.devnet.solana.com');
  const adlLaunchpad = new AdlLaunchpad(connection);
  const walletKp = Keypair.fromSecretKey(bs58.decode(process.env.SOLANA_PRIVATE_KEY!));

  const tokenMint = new PublicKey('2LG3UE9YUrtdcJpk96awsj2GT261KVHTkba7G5YR8Qvn');
  // load bonding curve first
  const bondingCurveAccount = await adlLaunchpad.loadBondingCurveAccount(tokenMint);

  const swapPartyIx = await adlLaunchpad.swapPublicInstruction({
    user: walletKp.publicKey,
    poolTokenMint: tokenMint,
    amountIn: new BN(1000000),
    direction: false, // false: buy, true: sell
    minimumReceiveAmount: new BN(123),
    creator: bondingCurveAccount.creator,
    tokenProgram: TOKEN_PROGRAM_ID,
  });

  const signature = await sendTransaction(connection, new Transaction().add(swapPartyIx), walletKp);
}

main().catch(console.error);
