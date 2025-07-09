// Given an integer array nums, return an array output such that output[i] is equal to the product of all elements in nums except nums[i], without using division, and in O(n) time.

// Input:  nums = [1, 2, 3, 4]
// Output:        [24,12,8,6]

function productOfLeft(arr, index) {
  const newArr = arr.slice(0, index);
  let result = newArr[0] ?? 1;
  if (newArr.length < 1) return result;
  for (let a = 1; a < newArr.length; a++) {
    result *= newArr[a];
  }
  return result;
}

function productOfRight(arr, index) {
  const newArr = arr.slice(index + 1, arr.length);
  let result = newArr[0] ?? 1;
  if (newArr.length < 1) return result;
  for (let a = 1; a < newArr.length; a++) {
    result *= newArr[a];
  }
  return result;
}

function productOfAnArrayExceptItself(arr) {
  let result = [];
  for (let index = 0; index < arr.length; index++) {
    const totalOfLeft = productOfLeft(arr, index);
    const totalOfRight = productOfRight(arr, index);
    const productTotal = totalOfLeft * totalOfRight;
    result.push(productTotal);
  }

  return result;
}

const newArr = productOfAnArrayExceptItself([1, 2, 3, 4]);
console.log("newArr", newArr);
