// To rotate an array or string from the right up to a given index, you essentially split the array/string at that index (counted from the right), and move the right part to the front.

// arr = [1, 2, 3, 4, 5, 6]
// indexFromRight = 2

function rotateFromRight(arr, length) {
  const splittedArr = arr.splice(arr.length - length, length);
  return [...splittedArr, ...arr];
}

console.log("new Rotated Arr", rotateFromRight([1, 2, 3, 4, 5, 6], 2));
