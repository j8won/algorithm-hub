const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = input[0];
const array = N.split("").map(Number);

array.sort((a, b) => b - a);
console.log(array.join(""));
