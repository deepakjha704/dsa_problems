// // given input char array like "DFbdAxa.." ( mixture of alphabets Caps and small letters in any order as input). Find the highest Char which has both Caps and small letters. in the above case, though Aa is there, Dd will be the highest char you need to return.

// Input: "aAbBcCdDeEFgGxXzZyY"

function findHighestCharCountWithBothCases(arr) {
  const obj = {};
  for (let i of arr) {
    const a = i.toLowerCase();
    if (obj[a]) {
      obj[a] += 1;
    } else {
      obj[a] = 1;
    }
  }
  return Object.keys(obj).reduce(
    (acc, num) => (obj[num] > acc ? obj[num] : acc),
    0
  );
}

const maxCount = findHighestCharCountWithBothCases([..."aAbBcCdDeEFgaGxXzZyY"]);
console.log("max count", maxCount);
