import { Connection, Keypair, PublicKey } from '@solana/web3.js';
import { AdlLaunchpad } from '../src/AdlLaunchpad';
import { AnchorProvider, BN } from '@coral-xyz/anchor';
import bs58 from 'bs58';
import NodeWallet from '@coral-xyz/anchor/dist/cjs/nodewallet';
import 'dotenv/config';

async function main() {
  const connection = new Connection('https://api.devnet.solana.com');
  const adlLaunchpad = new AdlLaunchpad(connection);

  const walletKp = Keypair.fromSecretKey(bs58.decode(process.env.SOLANA_PRIVATE_KEY!));
  const provider = new AnchorProvider(connection, new NodeWallet(walletKp));

  const simulateResult = await adlLaunchpad.simulateSwap({
    provider,
    poolTokenMint: new PublicKey('HzedwEytp99apZ3EPquV37jJtJyNyRFzpkK82BLPtV1H'),
    amountIn: new BN(0.1 * 1e9),
    direction: false,
  });

  console.log(simulateResult.toString());
}

main().catch(console.error);
