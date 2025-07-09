// flatten deeply nested array

// function flattenArray(arr) {
//   let newArray = [];
//   arr.forEach((element) => {
//     if (Array.isArray(element)) {
//       newArray = [...newArray, ...flattenArray(element)];
//     } else {
//       newArray.push(element);
//     }
//   });
//   return newArray;
// }

function flattenArray(arr) {
  return arr.flat(Infinity);
}

// function flattenArray(arr) {
//   const newArr = arr.reduce(
//     (accumulator, value) =>
//       Array.isArray(value)
//         ? [...accumulator, ...flattenArray(value)]
//         : [...accumulator, value],
//     []
//   );
//   return newArr;
// }

const newFlattenArr = flattenArray([
  [1, 2, 3],
  [1, 2, [1, 7]],
  [3, 6, [1, [5, 9]]],
]); // to deeply nested Array and convert s

console.log("flatter arr", newFlattenArr);
