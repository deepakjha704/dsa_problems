// find all two sum combination for a target

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9],
  target = 9;
// output: [[1,8], [2,7], [3,6], [4,5]];

function allPossibleTwoSum(arr, target) {
  const newArr = [];
  const tempArr = structuredClone(arr);

  for (let a of arr) {
    const newTarget = target - a;

    if (tempArr.includes(newTarget)) {
      newArr.push([tempArr[a], newTarget]);
    }
    // arr = arr.slice(a + 1, arr.length);
    tempArr.shift();
  }

  return newArr;
}

console.log("possible two sum", allPossibleTwoSum(arr, target));
