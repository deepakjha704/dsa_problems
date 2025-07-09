// rotate an to nth position on left or right

function rotateAnArrayToNthPosition(arr, depth, position) {
  if (position === "start") {
    return [...arr.slice(depth, arr.length), ...arr.slice(0, depth)];
  } else {
    return [
      ...arr.slice(arr.length - depth, arr.length),
      ...arr.slice(0, depth + 1),
    ];
  }
}

const newRotatedArray = rotateAnArrayToNthPosition([1, 2, 3, 4, 5], 2, "end");
console.log("newRotatedArray", newRotatedArray);
