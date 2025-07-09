// find the sum of curry

function findSumOfCurry(temp1) {
  return (temp2) => {
    if (!temp2) return temp1;
    else return findSumOfCurry(temp1 + temp2);
  };
}

const total = findSumOfCurry(2)(3)(5)(4)(); // it will return curry function

console.log(total);
