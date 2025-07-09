// Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Input:  [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]

function mergeInterval(intervals) {
  let temp = intervals[0],
    result = [];

  for (let interval = 1; interval < intervals.length; interval++) {
    const [m, n] = temp;
    const [a, b] = intervals[interval];

    if (n > a) {
      temp[0] = Math.min(m, a);
      temp[1] = Math.max(n, b);
    } else {
      result.push(temp);
      temp = intervals[interval];
    }
  }
  result.push(temp);
  return result;
}

const newIntervals = mergeInterval([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]);

console.log("merged intervals", newIntervals);
