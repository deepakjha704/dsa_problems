// https://www.youtube.com/watch?v=_sfrankKVQk&list=PLe3J6mZBq1xXGugXelPwjNeWuOVrVoWQS&index=6

//Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Input:  nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6

function findMaximumSumSubArray(arr) {
  let sum = 0,
    max = arr[0];

  for (let a of arr) {
    sum = Math.max(a + sum, 0);
    max = Math.max(sum, max);
  }
  return max;
}

const maximumSum = findMaximumSumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

console.log("maximumSum", maximumSum);
