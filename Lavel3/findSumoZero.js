// Given a sorted array of integers, find the first pair of numbers whose sum is zero. Return the pair as an array. If no such pair exists, return undefined.

// Input: [-5, -3, -2, -1, 0, 1, 3, 5]
// Output:[[-1,1], [-5, 5]]

// Input: [-3, -2, -1, 0, 4, 5]
// Output: []

function findTwoSumZero(arr) {
  let start = 0,
    end = arr.length - 1,
    result = [];
  while (start < end) {
    const sum = arr[start] + arr[end];
    if (sum === 0) result.push([arr[start], arr[end]]);
    else if (sum > 0) {
      end--;
    }
    {
      start++;
    }
  }
  return result;
}

console.log(
  "two element whose some is zero",
  findTwoSumZero([-5, -3, -2, -1, 0, 1, 3, 5])
);
