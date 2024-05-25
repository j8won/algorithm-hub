const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const array = input.pop().split(" ").map(Number);

const sorted = [...new Set(array)].sort((a, b) => a - b);

const map = new Map();
sorted.forEach((x, i) => map.set(x, i));

const answer = array.map((x) => map.get(x));

console.log(answer.join(" "));