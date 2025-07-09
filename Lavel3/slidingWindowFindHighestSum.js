// Given an array of integers and a number k, find the maximum sum of any contiguous subarray of size k.

// Input: arr = [2, 1, 5, 1, 3, 2], k = 3
// Output: 9
// Explanation: Subarray [5, 1, 3] has the maximum sum = 9

function findMaxSumOfSubArray(arr, k) {
  let tempSubArray = [],
    tempMax = 0;

  // start of loop and end of loop depends on k
  // we take min as 9 and max as arr.length-k-1
  let min = 0,
    max = arr.length - 1;
  for (let i = min; i < max - 1; i++) {
    // slice the array from min to min+k position
    const subArray = arr.slice(i, i + k);
    // find the sum of su array using reduce method
    const tempSum = subArray.reduce((acc, item) => acc + item, 0);
    // compare the temp sum with tempMax if tempMax is greater assign subArray to TempSubArray and max to TempMax
    if (tempSum > tempMax) {
      tempMax = tempSum;
      tempSubArray = subArray;
    }
  }
  return { tempSubArray, tempMax };
}

console.log("max sum subArr", findMaxSumOfSubArray([2, 1, 5, 1, 3, 2], 3));
