const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
let meets = input.map((x) => x.split(" ").map(Number));

meets.sort((a, b) => {
  if (a[1] !== b[1]) return a[1] - b[1];
  else return a[0] - b[0];
});

let cnt = 1;
let cur = 0;

for (let i = 1; i < N; i++) {
  if (meets[cur][1] <= meets[i][0]) {
    cur = i;
    cnt++;
  }
}

console.log(cnt);