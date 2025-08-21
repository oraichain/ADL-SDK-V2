import { Connection, Keypair, Transaction } from '@solana/web3.js';

export async function sendTransaction(connection: Connection, tx: Transaction, walletKp: Keypair) {
  const lastBlock = await connection.getLatestBlockhash();
  tx.recentBlockhash = lastBlock.blockhash;
  tx.feePayer = walletKp.publicKey;
  tx.sign(walletKp);

  const signature = await connection.sendRawTransaction(tx.serialize(), {
    skipPreflight: false,
    preflightCommitment: 'confirmed',
  });

  console.log('Successfully sent transaction', signature);
  console.log(
    `https://solscan.io/tx/${signature}?cluster=custom&customUrl=${connection.rpcEndpoint}`
  );
  return signature;
}
