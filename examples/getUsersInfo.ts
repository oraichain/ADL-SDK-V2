import { Connection, PublicKey } from '@solana/web3.js';
import { AdlLaunchpad } from '../src/AdlLaunchpad';

async function main() {
  const connection = new Connection('https://api.devnet.solana.com');
  const adlLaunchpad = new AdlLaunchpad(connection);

  const stakersInfo = await adlLaunchpad.getUsersInfoByPool(
    [
      new PublicKey('CrEXamRqW3F4BfJZUYREr25jkDsyV2QxuVqK2BCZMrTu'),
      new PublicKey('CrEXamRqW3F4BfJZUYREr25jkDsyV2QxuVqK2BCZMrTu')
    ],
    new PublicKey('4JdDcbemhLhPCUKnpMJX5HT4ynUHtD8RKJtqbu29Uyag')
  );

  console.log(stakersInfo);
}

main().catch(console.error);
