// Coin change problem using Dynamic programming
/**
 * Function to solve the coin change problem using dynamic programming.
 * @param {number[]} coins - An array of coin denominations.
 * @param {number} amount - The target amount.
 * @returns {number} - The minimum number of coins to make up the amount, or -1 if it's not possible.
*/

function coinChange(coins, amount) {
    //Initialize an array to store the minimum coins needed for each amount from 0 to amount

    const dp = new Array(amount + 1).fill(amount +1);
    console.log(dp);
    
    dp[0] = 0;

    for(let i =1; i<=amount; i++) {
        for(let coin of coins) {
            if(i-coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i-coin] + 1);
            }
        }
    }
    return dp[amount] > amount ? - 1 : dp[amount];

}

const coins = [1, 2, 5];
const amount = 11;

console.log(`Coins: ${coins}, Amount: ${amount}`);
console.log(`Minimum coins needed: ${coinChange(coins, amount)}`); // Output: 3 (5 + 5 + 1)

const coins2 = [2];
const amount2 = 3;
console.log(`\nCoins: ${coins2}, Amount: ${amount2}`);
console.log(`Minimum coins needed: ${coinChange(coins2, amount2)}`); // Output: -1