const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [a, b] = input.pop().split(" ").map(Number);

let cnt = 1;
let flag = false;

while (a <= b) {
  if (a === b) {
    flag = true;
    break;
  }
  if (b % 2 === 0) {
    b = parseInt(b / 2);
    cnt++;
  } else if (b % 10 === 1) {
    b = parseInt(b / 10);
    cnt++;
  } else break;
}

if (flag) console.log(cnt);
else console.log(-1);