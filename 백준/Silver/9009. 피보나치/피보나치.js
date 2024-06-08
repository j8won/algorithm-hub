const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let testCase = Number(input.shift());

let fibo = [0, 1];
while (fibo[fibo.length - 1] < 1e9) {
  fibo.push(fibo[fibo.length - 2] + fibo[fibo.length - 1]);
}
// console.log(fibo);

function getMinFibonacci(number) {
  let result = [];
  let idx = fibo.length - 1;

  while (number > 0) {
    if (number >= fibo[idx]) {
      number -= fibo[idx];
      result.push(fibo[idx]);
    }
    idx--;
  }

  return result.reverse().join(" ");
}

let answer = "";
for (let i = 0; i < testCase; i++) {
  answer += getMinFibonacci(input[i]) + "\n";
}

console.log(answer);
