# ADL SDK v2

A TypeScript SDK for interacting with the ADL (Automated Dynamic Launchpad) protocol on Solana. This SDK provides a comprehensive interface for staking, swapping, and managing liquidity pools with bonding curve mechanics.

## Features

- 🔄 **Staking & Unstaking**: Manage your staked tokens in liquidity pools
- 💱 **Token Swapping**: Execute swaps with both public and party modes
- 📊 **Pool Information**: Query bonding curve data and user positions
- 🎯 **Swap Simulation**: Simulate swaps before execution
- 🏦 **Token Claims**: Claim earned tokens from pools
- 🔧 **TypeScript Support**: Full TypeScript support with comprehensive type definitions

## Quick Start

### Basic Setup

```typescript
import { Connection } from '@solana/web3.js';
import { AdlLaunchpad } from 'adl-sdk-v2';

// Initialize connection
const connection = new Connection('https://api.devnet.solana.com');

// Create SDK instance
const adlLaunchpad = new AdlLaunchpad(connection);
```

### Environment Setup

Create a `.env` file in your project root:

```env
SOLANA_PRIVATE_KEY=your_base58_encoded_private_key_here
```

## API Reference

### Core Class: `AdlLaunchpad`

The main class for interacting with the ADL protocol.

#### Constructor

```typescript
constructor(connection: Connection)
```

- `connection`: Solana RPC connection instance

### Query Methods

#### `loadConfigAccount()`

Loads the protocol configuration account.

```typescript
const config = await adlLaunchpad.loadConfigAccount();
```

#### `loadBondingCurveAccount(tokenMint: PublicKey)`

Loads bonding curve information for a specific token.

```typescript
const bondingCurve = await adlLaunchpad.loadBondingCurveAccount(tokenMint);
```

#### `getUserInfoByPool(user: PublicKey, poolTokenMint: PublicKey)`

Gets user staking information for a specific pool.

```typescript
const userInfo = await adlLaunchpad.getUserInfoByPool(user, poolTokenMint);
```

#### `simulateSwap(params: SimulateSwapParams)`

Simulates a swap operation without executing it.

```typescript
const simulation = await adlLaunchpad.simulateSwap({
  provider,
  poolTokenMint,
  amountIn,
  direction: false, // false: buy, true: sell
});
```

### Transaction Instructions

#### `stakeInstruction(params: StakeParams)`

Creates a staking instruction.

```typescript
const stakeIx = await adlLaunchpad.stakeInstruction({
  owner: wallet.publicKey,
  poolTokenMint: tokenMint,
  amount: new BN(100000000), // Amount in smallest units
  stakeTokenMint: stakeTokenMint,
});
```

#### `unstakeInstruction(params: UnstakeParams)`

Creates an unstaking instruction.

```typescript
const unstakeIx = await adlLaunchpad.unstakeInstruction({
  owner: wallet.publicKey,
  poolTokenMint: tokenMint,
  amount: new BN(100000000),
  stakeTokenMint: stakeTokenMint,
});
```

#### `swapPublicInstruction(params: SwapParams)`

Creates a public swap instruction.

```typescript
const swapIx = await adlLaunchpad.swapPublicInstruction({
  user: wallet.publicKey,
  poolTokenMint: tokenMint,
  amountIn: new BN(1000000),
  direction: false, // false: buy, true: sell
  minimumReceiveAmount: new BN(123),
  creator: bondingCurveAccount.creator,
  tokenProgram: TOKEN_PROGRAM_ID,
});
```

#### `swapPartyInstruction(params: SwapParams)`

Creates a party swap instruction.

```typescript
const partySwapIx = await adlLaunchpad.swapPartyInstruction({
  user: wallet.publicKey,
  poolTokenMint: tokenMint,
  amountIn: new BN(1000000),
  direction: false,
  minimumReceiveAmount: new BN(123),
  creator: bondingCurveAccount.creator,
  tokenProgram: TOKEN_PROGRAM_ID,
});
```

#### `claimTokenInstruction(params: ClaimTokenParams)`

Creates a token claim instruction.

```typescript
const claimIx = await adlLaunchpad.claimTokenInstruction({
  owner: wallet.publicKey,
  poolTokenMint: tokenMint,
  receiver: wallet.publicKey,
  tokenProgram: TOKEN_PROGRAM_ID,
});
```

## Examples

### 1. Simulate a Swap

```typescript
import { Connection, Keypair, PublicKey } from '@solana/web3.js';
import { AdlLaunchpad } from 'adl-sdk-v2';
import { AnchorProvider, BN } from '@coral-xyz/anchor';
import bs58 from 'bs58';
import NodeWallet from '@coral-xyz/anchor/dist/cjs/nodewallet';
import 'dotenv/config';

async function simulateSwap() {
  const connection = new Connection('https://api.devnet.solana.com');
  const adlLaunchpad = new AdlLaunchpad(connection);

  const walletKp = Keypair.fromSecretKey(bs58.decode(process.env.SOLANA_PRIVATE_KEY!));
  const provider = new AnchorProvider(connection, new NodeWallet(walletKp));

  const simulateResult = await adlLaunchpad.simulateSwap({
    provider,
    poolTokenMint: new PublicKey('HzedwEytp99apZ3EPquV37jJtJyNyRFzpkK82BLPtV1H'),
    amountIn: new BN(0.1 * 1e9),
    direction: false, // Buy
  });

  console.log('Simulation result:', simulateResult.toString());
}
```

### 2. Stake Tokens

```typescript
import { BN } from '@coral-xyz/anchor';
import { Keypair, PublicKey, Transaction } from '@solana/web3.js';
import { Connection } from '@solana/web3.js';
import { AdlLaunchpad } from 'adl-sdk-v2';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import bs58 from 'bs58';
import 'dotenv/config';

async function stakeTokens() {
  const connection = new Connection('https://api.devnet.solana.com');
  const adlLaunchpad = new AdlLaunchpad(connection);
  const walletKp = Keypair.fromSecretKey(bs58.decode(process.env.SOLANA_PRIVATE_KEY!));

  const tokenMint = new PublicKey('HzedwEytp99apZ3EPquV37jJtJyNyRFzpkK82BLPtV1H');
  const stakeTokenMint = new PublicKey('3Ff7yUkQsbMzViXu7aAxAYsgpy31wY8R8TteE39FDuw4');

  const stakeIx = await adlLaunchpad.stakeInstruction({
    owner: walletKp.publicKey,
    poolTokenMint: tokenMint,
    amount: new BN(100000000), // 100 tokens (assuming 6 decimals)
    stakeTokenMint: stakeTokenMint,
  });

  const transaction = new Transaction().add(stakeIx);
  // Send transaction logic here
}
```

### 3. Get Pool Information

```typescript
import { Connection, PublicKey } from '@solana/web3.js';
import { AdlLaunchpad } from 'adl-sdk-v2';

async function getPoolInfo() {
  const connection = new Connection('https://api.devnet.solana.com');
  const adlLaunchpad = new AdlLaunchpad(connection);

  const bondingCurveAccount = await adlLaunchpad.loadBondingCurveAccount(
    new PublicKey('2LG3UE9YUrtdcJpk96awsj2GT261KVHTkba7G5YR8Qvn')
  );

  console.log('Bonding curve info:', bondingCurveAccount);
}
```

### 4. Get User Information

```typescript
import { Connection, PublicKey } from '@solana/web3.js';
import { AdlLaunchpad } from 'adl-sdk-v2';

async function getUserInfo() {
  const connection = new Connection('https://api.devnet.solana.com');
  const adlLaunchpad = new AdlLaunchpad(connection);

  const stakerInfo = await adlLaunchpad.getUserInfoByPool(
    new PublicKey('4JdDcbemhLhPCUKnpMJX5HT4ynUHtD8RKJtqbu29Uyag'),
    new PublicKey('4JdDcbemhLhPCUKnpMJX5HT4ynUHtD8RKJtqbu29Uyag')
  );

  console.log('User staking info:', stakerInfo);
}
```

## Types

### `StakeParams`

```typescript
type StakeParams = {
  owner: PublicKey;
  poolTokenMint: PublicKey;
  amount: BN;
  stakeTokenMint: PublicKey;
};
```

### `SwapParams`

```typescript
type SwapParams = {
  user: PublicKey;
  poolTokenMint: PublicKey;
  amountIn: BN;
  direction: boolean; // true: sell, false: buy
  minimumReceiveAmount: BN;
  creator: PublicKey;
  tokenProgram: PublicKey;
};
```

### `SimulateSwapParams`

```typescript
type SimulateSwapParams = {
  provider: AnchorProvider;
  poolTokenMint: PublicKey;
  amountIn: BN;
  direction: boolean; // true: sell, false: buy
};
```

## Dependencies

- `@coral-xyz/anchor`: ^0.31.1
- `@solana/spl-token`: ^0.3.9
- `@solana/web3.js`: ^1.87.6
- `bs58`: ^6.0.0
- `dotenv`: ^17.2.1
- `invariant`: ^2.2.4

## Development

### Building

```bash
npm run build
```

### Testing

```bash
npm test
```

### Cleaning

```bash
npm run clean
```

## License

This project is licensed under the MIT License.

## Support

For support and questions, please refer to the examples in the `examples/` directory or create an issue in the repository.
