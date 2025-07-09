// find Third highest Number

function findThirdHighest(arr) {
  let highest = 0,
    secondHighest = 0,
    thirdHighest = 0;
  for (let a of arr) {
    if (a > highest) {
      secondHighest = highest;
      thirdHighest = secondHighest;
      highest = a;
    } else if (a > secondHighest) {
      thirdHighest = secondHighest;
      secondHighest = a;
    } else if (a > thirdHighest) {
      thirdHighest = a;
    }
  }
  return thirdHighest;
}

const thirdHighest = findThirdHighest([1, 8, 5, 3, 4, 5, 6]);

console.log(thirdHighest);
