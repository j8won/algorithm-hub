const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const trees = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let left = 0;
let right = Math.max(...trees);
let answer = 0;

while (left <= right) {
  let mid = Math.floor((left + right) / 2);

  let length = trees
    .map((x) => (x > mid ? x - mid : 0))
    .reduce((acc, cur) => acc + cur, 0);
  // console.log(length);
  if (length >= M) {
    answer = Math.max(answer, mid);
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(answer);
