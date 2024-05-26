const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = +input[0];

let cnt = 0;
let flag = false;

while (N >= 0) {
  if (N === 0 || N % 5 === 0) {
    cnt += parseInt(N / 5);
    flag = true;
    break;
  }
  N -= 3;
  cnt++;
}

if (flag) console.log(cnt);
else console.log(-1);