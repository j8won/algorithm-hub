const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const arrN = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const M = +input[2];
const arrM = input[3].split(" ").map(Number);

// console.log(arrN, arrM);

let answer = [];

for (let i = 0; i < M; i++) {
  let char = arrM[i];

  let left = 0;
  let right = N - 1;

  let isNumberInArray = false;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (char > arrN[mid]) {
      left = mid + 1;
    } else if (char < arrN[mid]) {
      right = mid - 1;
    } else {
      isNumberInArray = true;
      break;
    }
  }

  answer.push(isNumberInArray ? 1 : 0);
}

console.log(answer.join("\n"));
