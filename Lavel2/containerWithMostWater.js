// You are given an array height[] of non-negative integers, where each element represents a vertical line on the x-axis. The task is to find two lines that, together with the x-axis, form a container that holds the most water.

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
function containerWithMostWater(arr) {
  // two pointer problem
  // assume left and right to be the first and last element of the array
  //if left > right then decrement right by one and multiply right-left * min(left, right) and assign to temp
  // else

  let left = 0,
    right = arr.length - 1,
    max = 0;
  debugger;
  while (left < right) {
    const temp = (right - left) * Math.min(arr[left], arr[right]);
    max = Math.max(temp, max);
    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
}

const maximumWater = containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]);

console.log("maximum", maximumWater);
