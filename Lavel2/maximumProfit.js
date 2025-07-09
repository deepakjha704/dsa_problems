//ref: https://www.youtube.com/watch?v=E2-heUEnZKU
// The "Best Time to Buy and Sell Stock" is a classic maximum profit problem on LeetCode. It's listed as:

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Input: prices = [7,1,5,3,6,4]
// Output: 5

function findMaximumProfit(arr) {
  let buyingPrice = arr[0],
    currentProfit = 0,
    maximumProfit = 0;
  for (let a of arr) {
    buyingPrice = Math.min(buyingPrice, a);
    currentProfit = a - buyingPrice;
    maximumProfit = Math.max(currentProfit, maximumProfit);
  }
  return maximumProfit;
}

const maximumProfit = findMaximumProfit([7, 1, 5, 3, 6, 4, 11]);
console.log("maximum profit", maximumProfit);
