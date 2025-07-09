// Two string are anagram if
// number of occurrence of each character is same

// function checkAnagram(str1, str2) {
//   if (str1 === str2) return true;

//   const sortedStr1 = [...str1.toLowerCase()].sort().join();
//   const sortedStr2 = [...str2.toLowerCase()].sort().join();

//   return sortedStr1 === sortedStr2;
// }

function checkAnagram(str1, str2) {
  const newStr1 = [...str1],
    newStr2 = [...str2];
  const obj1 = {},
    obj2 = {};

  newStr1.forEach((val) => {
    if (obj1[val]) {
      obj1[val] = ++obj1[val];
    } else {
      obj1[val] = 1;
    }
  });

  newStr2.forEach((val) => {
    if (obj2[val]) {
      obj2[val] = ++obj2[val];
    } else {
      obj2[val] = 1;
    }
  });

  for (const key of Object.keys(obj1)) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

const anagram = checkAnagram("listen", "silent");

const anagram1 = checkAnagram("listen", "hello");

console.log("anagram", anagram, anagram1);
