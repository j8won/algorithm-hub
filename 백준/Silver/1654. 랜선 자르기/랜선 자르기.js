const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [K, N] = input[0].split(" ");
let arr = input.slice(1).map(Number);

let min = 1;
let max = Math.max(...arr);

while (min <= max) {
  let mid = Math.floor((min + max) / 2);

  let pieceNum = arr.map((x) => Math.floor(x / mid)).reduce((a, b) => a + b, 0);

  if (pieceNum >= +N) min = mid + 1;
  else max = mid - 1;
}

console.log(max);