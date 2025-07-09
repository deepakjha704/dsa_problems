// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input has exactly one solution, and you may not use the same element twice.

// twoSum([2,7,11,15], 9)

function twoSum(arr, sum) {
  const map = {};
  let result = [];
  for (let a = 0; a < arr.length; a++) {
    map[arr[a]] = a;
  }

  for (let a = 0; a < arr.length; a++) {
    const temp = sum - arr[a];
    if (map[temp]) {
      result = [a, map[temp]];
    }
  }
  return result;
}

console.log("combination output", twoSum([2, 7, 11, 15], 9));
