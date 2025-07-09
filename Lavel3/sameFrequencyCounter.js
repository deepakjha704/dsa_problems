// Write a function sameFrequency(num1, num2) that takes two positive integers and returns true if they contain the same frequency of digits, otherwise false.

// sameFrequency(182, 281); // true
// sameFrequency(34, 14); // false
// sameFrequency(3589578, 5879385); // true
// sameFrequency(22, 222); // false

function hasSameFrequency(num1, num2) {
  const arr1 = [...num1.toString()],
    arr2 = [...num2.toString()];
  const temp1 = {},
    temp2 = {};
  if (num1.length !== num2.length) return false;

  for (let a of arr1) {
    temp1[a] = (temp1[1] || 0) + 1;
  }
  for (let a of arr2) {
    temp2[a] = (temp2[1] || 0) + 1;
  }
  for (let a of Object.keys(temp1)) {
    if (temp2[a] !== temp1[1]) return false;
  }
  return true;
}

console.log("has same frequency", hasSameFrequency(181, 281));
