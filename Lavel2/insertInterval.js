// You are given a list of non-overlapping, sorted intervals and a new interval to insert.
// Insert the new interval into the correct position, and merge any overlapping intervals.

// Input:
//   intervals = [[1, 3], [6, 9]]
//   newInterval = [2, 5]

// Output:
//   [[1, 5], [6, 9]]

function InsertInterval(intervals, newInterval) {
  const result = [];

  for (let interval of intervals) {
    if (interval[1] < newInterval[0]) {
      result.push(interval);
    } else if (interval[0] > newInterval[1]) {
      result.push(newInterval);
      newInterval = interval;
    } else {
      newInterval[0] = Math.min(newInterval[0], interval[0]);
      newInterval[1] = Math.max(newInterval[1], interval[1]);
    }
  }
  result.push(newInterval);
  return result;
}

const result = InsertInterval(
  [
    [1, 2],
    [3, 5],
    [6, 7],
    [8, 10],
    [12, 16],
  ],
  [4, 8]
);

console.log("result", result);
