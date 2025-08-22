import { Connection, PublicKey } from '@solana/web3.js';
import { AdlLaunchpad } from '../src/AdlLaunchpad';

async function main() {
  const connection = new Connection('https://api.devnet.solana.com');
  const adlLaunchpad = new AdlLaunchpad(connection);

  const stakerInfo = await adlLaunchpad.getUserInfoByPool(
    new PublicKey('CrEXamRqW3F4BfJZUYREr25jkDsyV2QxuVqK2BCZMrTu'),
    new PublicKey('4JdDcbemhLhPCUKnpMJX5HT4ynUHtD8RKJtqbu29Uyag')
  );

  console.log(stakerInfo);
}

main().catch(console.error);
