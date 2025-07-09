// "Count the maximum number of palindromic substrings in a string"?
// e.g. Input: "aaa" → Output: 6
// (Substrings: "a", "a", "a", "aa", "aa", "aaa")

// "Length of the longest palindromic substring"?
// e.g. Input: "babad" → Output: "bab" or "aba" (length = 3)

const checkPalindrome = (arr, left, right) => {
  let count = 0;
  while (arr[left] === arr[right] && left >= 0 && right < arr.length);
  {
    count++;
    left--;
    right++;
  }
  return count;
};
function CountPalindrome(str) {
  const arr = [...str];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    const oddPalindrome = checkPalindrome(arr, i, i + 1);
    const evenPalinDrome = checkPalindrome(arr, i, i + 1);
    count = oddPalindrome + evenPalinDrome;
  }

  return count;
}

const palindromes = CountPalindrome("aabbba");
console.log("palindrome", palindromes);
