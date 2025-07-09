function countVowels(arr) {
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };
  return arr.filter((val) => vowels[val]);
}

const numberOfVowels = countVowels(["d", "e", "e", "p", "a", "k"]);

console.log("numberOfVoWels", numberOfVowels);
