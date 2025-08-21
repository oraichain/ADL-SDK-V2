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

  const tokenMint = new PublicKey('HzedwEytp99apZ3EPquV37jJtJyNyRFzpkK82BLPtV1H');
  const stakeTokenMint = new PublicKey('3Ff7yUkQsbMzViXu7aAxAYsgpy31wY8R8TteE39FDuw4');

  const stakeIx = await adlLaunchpad.stakeInstruction({
    owner: walletKp.publicKey,
    poolTokenMint: tokenMint,
    amount: new BN(100000000),
    stakeTokenMint: stakeTokenMint,
  });

  const signature = await sendTransaction(connection, new Transaction().add(stakeIx), walletKp);
}

main().catch(console.error);
