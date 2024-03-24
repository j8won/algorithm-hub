const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

/**
 * 서로 다른 용액을 혼합하여 특성값이 0에 가장 가까운 용액을 만들어내는 두 용액 찾기
 */

const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);


let left = 0;
let right = arr.length - 1;

let min = Infinity;
let answer = [arr[left], arr[right]];

while (left < right) {
  let sum = arr[left] + arr[right];

  if (Math.abs(sum) < min) {
    min = Math.abs(sum);
    answer = [arr[left], arr[right]];
  }

  if (sum === 0) {
    break;
  } else if (sum > 0) {
    right--;
  } else {
    left++;
  }
}

console.log(answer.sort((a, b) => a - b).join(" "));
