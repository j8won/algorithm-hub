const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
let heights = input.pop().split(" ").map(Number);

let cnt = 0;
let arrow = new Array(1000001).fill(0);

for (let x of heights) {
  if (arrow[x] > 0) {
    arrow[x]--;
    arrow[x - 1]++;
  } else {
    cnt++;
    arrow[x - 1]++;
  }
}

console.log(cnt);