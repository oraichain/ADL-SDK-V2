import { BN } from '@coral-xyz/anchor';
import { Keypair, PublicKey, Transaction } from '@solana/web3.js';
import { Connection } from '@solana/web3.js';
import { AdlLaunchpad } from '../src/AdlLaunchpad';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import bs58 from 'bs58';
import 'dotenv/config';
import { sendTransaction } from './utils';

const connection = new Connection('https://api.devnet.solana.com');
const adlLaunchpad = new AdlLaunchpad(connection);
const walletKp = Keypair.fromSecretKey(bs58.decode(process.env.SOLANA_PRIVATE_KEY!));

const tokenMint = new PublicKey('2LG3UE9YUrtdcJpk96awsj2GT261KVHTkba7G5YR8Qvn');

async function main() {
  const bondingCurveAccount = await adlLaunchpad.loadBondingCurveAccount(tokenMint);

  /// buy tx
  const swapBuyPublicIx = await adlLaunchpad.swapPublicInstruction({
    user: walletKp.publicKey,
    poolTokenMint: tokenMint,
    amountIn: new BN(1000000),
    direction: false, // false: buy, true: sell
    minimumReceiveAmount: new BN(123),
    creator: bondingCurveAccount.creator,
    tokenProgram: TOKEN_PROGRAM_ID,
  });
  await sendTransaction(connection, new Transaction().add(swapBuyPublicIx), walletKp);

  // sell tx
  // query sellable amount
  const userInfo = await adlLaunchpad.getUserInfoByPool(walletKp.publicKey, tokenMint);
  const sellableAmount = userInfo?.totalClaim.toNumber();

  // sell a half of the sellable amount
  const amountIn = new BN(Math.floor(sellableAmount / 2));
  const swapSellPublicIx = await adlLaunchpad.swapPublicInstruction({
    user: walletKp.publicKey,
    poolTokenMint: tokenMint,
    amountIn,
    direction: true, // false: buy, true: sell
    minimumReceiveAmount: new BN(0),
    creator: bondingCurveAccount.creator,
    tokenProgram: TOKEN_PROGRAM_ID,
  });
  await sendTransaction(connection, new Transaction().add(swapSellPublicIx), walletKp);
}

main().catch(console.error);
