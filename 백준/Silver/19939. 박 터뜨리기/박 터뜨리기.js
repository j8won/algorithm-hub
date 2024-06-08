const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let [n, k] = input.map(Number);

// console.log(n, k);

function getMinBalls(x) {
  if (x === 1) return 1;
  return x + getMinBalls(x - 1);
}

let minBall = getMinBalls(k);

if (n < minBall) {
  return console.log(-1);
}

n -= minBall;
if (n % k === 0) console.log(k - 1);
else console.log(k);