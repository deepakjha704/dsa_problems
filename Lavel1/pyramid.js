// print a star pyramid

function printPyramid(depth) {
  for (let i = 1; i <= depth; i++) {
    const spaces = " ".repeat(depth - i);
    const star = "*".repeat(2 * i - 1);
    console.log(spaces + star);
  }
}
printPyramid(5);
