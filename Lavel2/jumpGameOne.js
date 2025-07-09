//rafrence https://www.youtube.com/watch?v=Gtugy3mRV-A

// You are given an array of non-negative integers nums. Each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index starting from the first index; otherwise, return false.

// Input: nums = [2, 3, 1, 1, 4]
// Output: true

const jumpGame1 = (arr) => {
  let end = arr.length - 1;

  for (let a = arr.length - 2; a >= 0; a--) {
    if (a + arr[a] >= end) {
      end = a;
    }
  }
  return end === 0;
};

const reachable = jumpGame1([1, 1, 2, 5, 2, 0, 0, 1, 3]);
console.log("reachable", reachable);
