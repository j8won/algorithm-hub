const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [N, ...arr] = input;
arr = [...new Set(arr)];

arr = arr.sort().sort((a, b) => a.length - b.length);
console.log(arr.join("\n"));
