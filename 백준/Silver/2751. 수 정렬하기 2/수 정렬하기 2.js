const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.shift();
input.sort((a, b) => a - b);

const set = Array.from(new Set(input));
console.log(set.join("\n"));