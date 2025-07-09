// check the array contains duplicate or not and remove the duplicate and return sorted arr

// input : [1,2,3,5,6,4,3,4,2]
// output : {duplicate: true, uniqueArr: [1,2,3,4,5,6]}

// Type: 1

// function removeDuplicate(arr) {
//   const obj = Object.create({});

//   for (const key of arr) {
//     if (obj[key]) {
//       //increment object keys value
//       obj[key] = ++obj[key];
//     } else {
//       //create new key and initialize the value to 1
//       obj[key] = 1;
//     }
//   }
//   const updatedArr = Object.keys(obj);
//   const hasDuplicates = arr.length === updatedArr.length;
//   return { duplicate: hasDuplicates, uniqueArr: updatedArr };
// }

// Type: 2

// function removeDuplicate(arr) {
//   const uniqueSet = new Set(arr);
//   const sameArr = arr.length === uniqueSet.size;
//   return { duplicate: sameArr, uniqueArr: [...uniqueSet].sort() };
// }

// Type: 3

// function removeDuplicate(arr) {
//   const newFilteredArr = arr.filter(
//     (value, index) => arr.indexOf(value) === index
//   );

//   return {
//     duplicate: arr.length === newFilteredArr.length,
//     uniqueArr: newFilteredArr.sort(),
//     // uniqueArr: newFilteredArr.sort((a, b) => b - a),  if want to sort in descending order
//   };
// }

const sortedUniqueArray = removeDuplicate([1, 6, 2, 3, 5, 6, 4, 3, 4, 2]);
console.log("sorted unique arr", sortedUniqueArray);
