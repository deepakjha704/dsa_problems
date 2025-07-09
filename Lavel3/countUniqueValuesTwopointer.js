// The "Count Unique Values" problem using the Two Pointer technique is a classic interview question, especially when working with sorted arrays.

//Input: [1, 1, 1, 2, 2, 3, 4, 4, 5]
// Output: 5

function uniqueArrayLength(arr) {
  let i = 0;

  for (let j = 1; j <= arr.length; j++) {
    if (arr[i] !== arr[j]) {
      ++i;
      arr[i] = arr[j];
    }
  }
  return { length: i, result: arr.splice(0, i) };
}

console.log(
  "new unique Array and length",
  uniqueArrayLength([1, 1, 1, 2, 2, 3, 4, 4, 5])
);
