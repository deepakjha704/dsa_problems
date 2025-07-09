// A palindrome is a word, number, phrase, or sequence that reads the same forward and backward (ignoring spaces, punctuation, and capitalization for phrases).

// "madam" → ✅ palindrome
// 121 -> 121
// "racecar" → ✅ palindrome

// "hello" → ❌ not a palindrome

// function checkPalindrome(word) {
//   let num = word;
//   let reverse = null;
//   if (Number.isInteger(word)) {
//     while (num > 0) {
//       const temp = num % 10;
//       reverse = reverse * 10 + temp;
//       num = Math.floor(num / 10);
//     }
//   } else {
//     const a = 0;
//     let tempStr = "";
//     const tempArr = [...word];
//     while (a < tempArr.length) {
//       tempStr += tempArr.pop();
//     }
//     reverse = tempStr;
//   }
//   return word === reverse;
// }

function checkPalindrome(word) {
  return word.toString() === [...word.toString()].reverse().join("");
}

const isPalindrome = checkPalindrome(121);
console.log("isPalindrome", isPalindrome);
