const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const array = input.pop().split(" ").map(Number);

array.sort((a, b) => a - b);
console.log(array[K - 1]);