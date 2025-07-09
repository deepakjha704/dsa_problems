// how can you remove a specific word from a sentence

function removeWord(sentence, word) {
  const newArr = sentence.split(" ");
  const tempArr = newArr.filter((item) => word !== item);
  return tempArr.join(" ");
}

console.log(removeWord("I really love to code in JavaScript", "really"));
