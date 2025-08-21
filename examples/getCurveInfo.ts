import { Connection, PublicKey } from '@solana/web3.js';
import { AdlLaunchpad } from '../src/AdlLaunchpad';

async function main() {
  const connection = new Connection('https://api.devnet.solana.com');

  const adlLaunchpad = new AdlLaunchpad(connection);

  const bondingCurveAccount = await adlLaunchpad.loadBondingCurveAccount(
    new PublicKey('2LG3UE9YUrtdcJpk96awsj2GT261KVHTkba7G5YR8Qvn')
  );

  console.log(bondingCurveAccount);
}

main().catch(console.error);
