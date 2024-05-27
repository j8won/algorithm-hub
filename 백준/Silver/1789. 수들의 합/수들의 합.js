const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const S = +input.pop();

let num = 1;
let sum = 0;
let cnt = 0;

while (sum <= S) {
  sum += num;
  cnt++;
  num++;
}

console.log(cnt - 1);