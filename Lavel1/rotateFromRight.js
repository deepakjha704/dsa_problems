// reverse an array

function rotate(arr) {
  const reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

const reversedArr = rotate([1, 2, 3, 4, 5, 6]);
console.log(reversedArr);
