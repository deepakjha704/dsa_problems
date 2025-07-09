// find the most repeated element in as array

// function findMostRepeatedElement(arr) {
//   const map = {};
//   let max = 0;
//   let maxChar = null;
//   for (const a of arr) {
//     if (map[a]) {
//       map[a] += 1;
//       if (map[a] > max) {
//         max = map[a];
//         maxChar = max;
//       }
//     } else {
//       map[a] = 1;
//     }
//   }
//   return { maxChar, max };
// }

function findMostRepeatedElement(arr) {
  const newObj = arr.reduce((acc, current) => {
    acc[current] ? (acc[current] += 1) : (acc[current] = 1);
    return acc;
  }, {});

  let mostFrequency = {};
  let max = 0;
  for (const [a, b] of Object.entries(newObj)) {
    if (max < b) {
      max = b;
      mostFrequency = { [a]: b };
    }
  }
  return mostFrequency;
}

const mostRepeatedElement = findMostRepeatedElement([
  1, 2, 3, 4, 3, 4, 5, 6, 3, 5, 3, 4,
]);
console.log("mostRepeatedElement", mostRepeatedElement);
