import { Connection, PublicKey } from '@solana/web3.js';
import { AdlLaunchpad } from '../src/AdlLaunchpad';
import { BN } from '@coral-xyz/anchor';

/**
 * Calculates the total allocation amount a user can receive based on their staking positions
 * across multiple vaults and the party's maximum allocation per pool limit.
 *
 * This function iterates through the user's staking details and matches them with vault information
 * to calculate proportional allocations based on the user's stake relative to total staked amount.
 *
 * @param vaultsInfo - Information about all staking vaults including token allocation and total staked amounts
 * @param userInfo - User's staking information including stake details for different tokens
 * @param maxPerPool - Maximum allocation amount allowed per pool (default: 10 tokens)
 * @returns Total allocation amount the user can receive across all their staking positions
 */
function calcAllocateAmount(vaultsInfo: any, userInfo: any, maxPerPool: BN = new BN(10 * 1e6)) {
  let allocateAmount = new BN(0);

  // Iterate through each of the user's staking positions
  for (const stakeDetail of userInfo.stakeDetails) {
    // Find matching vault information for the staking token
    for (const vaultInfo of vaultsInfo.stakingVaultInfos) {
      if (vaultInfo.stakingToken.toString() === stakeDetail.stakingToken.toString()) {
        // Calculate proportional allocation based on user's stake vs total staked
        // Formula: (user_stake_amount * vault_token_allocation) / total_staked_in_vault
        let amount = stakeDetail.snapshotAmount
          .mul(vaultInfo.tokenAllocation)
          .div(vaultInfo.totalStaked);

        // Apply maximum per pool limit if calculated amount exceeds it
        if (amount.gt(maxPerPool)) {
          amount = maxPerPool;
        }

        // Add this vault's allocation to the total
        allocateAmount = allocateAmount.add(amount);
      }
    }
  }

  return allocateAmount;
}

/**
 * Calculates the amount of input tokens needed to receive a specific amount of output tokens
 * using the constant product formula (x * y = k) with fee considerations.
 *
 * This implements the standard AMM swap calculation where:
 * - x and y are the current reserves of the two tokens
 * - amountOut is the desired output amount
 * - fee is the trading fee percentage
 * - feeOn determines whether fee is applied to input or output
 *
 * @param x - Current reserve of input token
 * @param y - Current reserve of output token
 * @param amountOut - Desired amount of output tokens to receive
 * @param fee - Trading fee percentage (e.g., 3 for 3%)
 * @param feeOn - Whether fee is applied to 'in' (input) or 'out' (output) tokens
 * @returns Amount of input tokens required for the swap
 */
function calculateAmountIn(
  x: BN,
  y: BN,
  amountOut: BN,
  fee: number,
  feeOn: 'in' | 'out' = 'in' // fee on token in or out, default is in
): BN {
  let totalAmountOut = amountOut;

  // If fee is applied to output, calculate the total amount that needs to be removed
  if (feeOn === 'out') {
    // Calculate fee amount (fee is based on tokenIn)
    const feeAmount = amountOut.mul(new BN(fee)).div(new BN(100));
    // Total amount that needs to be removed from the pool
    totalAmountOut = amountOut.add(feeAmount);
  }

  // Calculate amount in using constant product formula
  // Formula: amountIn = (x * totalAmountOut) / (y - totalAmountOut)
  // This ensures the product of reserves remains constant after the swap
  const numerator = x.mul(totalAmountOut);
  const denominator = y.sub(totalAmountOut);

  let amountIn = numerator.div(denominator);

  // If fee is applied to input, adjust the amount to account for the fee
  if (feeOn === 'in') {
    // Add fee to the calculated amount: amountIn = amountIn / (1 - fee/100)
    amountIn = amountIn.mul(new BN(100)).div(new BN(100 - fee));
  }

  return amountIn;
}

/**
 * Main function demonstrating how to calculate a user's allocation amount and required input
 * for participating in a party pool based on their staking positions.
 *
 * This example shows the complete flow:
 * 1. Load party configuration and bonding curve information
 * 2. Get staking vault information for the token
 * 3. Retrieve user's staking information
 * 4. Calculate allocation amount based on staking positions
 * 5. Calculate required input amount for the swap
 */
async function main() {
  // Initialize connection to Solana devnet using Helius RPC
  const connection = new Connection('https://api.devnet.solana.com');

  // Initialize the ADL Launchpad SDK
  const adlLaunchpad = new AdlLaunchpad(connection);

  // Token mint address for the party pool
  const tokenMint = new PublicKey('ecsdsq91zCdS9wStAy7qzHSKQWKDqRdTMxgqGj7ct9e');

  // Step 1: Load party configuration to get platform fees and other settings
  const config = await adlLaunchpad.loadConfigAccount();

  // Step 2: Load bonding curve information for the specific token
  // This contains current reserves and party limits
  const bondingCurve = await adlLaunchpad.loadBondingCurveAccount(tokenMint);

  // Step 3: Get staking vault information for the token
  // This contains information about all staking vaults and their allocations
  const vaultInfo = await adlLaunchpad.getStakingVaultInfo(tokenMint);

  // Step 4: Get user's staking information for this specific pool
  // This shows the user's stake amounts across different staking tokens
  const stakerInfo = await adlLaunchpad.getUserInfoByPool(
    new PublicKey('FN4UZrNgNm6RHgYRBSEFae2y2hfTw9SaqpafxbL7ub6F'), // User's wallet address
    tokenMint
  );

  // Step 5: Calculate how much the user can allocate based on their staking positions
  // This considers their stake amounts, vault allocations, and party limits
  const allocateAmount = calcAllocateAmount(vaultInfo, stakerInfo, bondingCurve.partyLimit);

  // Step 6: Calculate how much input (usually SOL) the user needs to provide
  // to receive their allocation amount, considering the bonding curve and platform fees
  const amountIn = calculateAmountIn(
    bondingCurve.reserveLamport, // Current SOL reserve
    bondingCurve.reserveToken, // Current token reserve
    allocateAmount, // Desired token amount
    config.platformBuyFee // Platform trading fee
  );

  // Output the results
  console.log({
    amountIn: amountIn.toString(), // Required SOL input amount
    allocateAmount: allocateAmount.toString(), // Token allocation amount
  });
}

// Execute the main function and handle any errors
main().catch(console.error);
