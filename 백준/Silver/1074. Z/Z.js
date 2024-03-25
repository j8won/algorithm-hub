const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [N, r, c] = input[0].split(" ").map(Number);

let arr = [
  [0, 1],
  [2, 3],
];

let answer = 0;

function solution(n, r, c) {
  if (n === 2) {
    return (answer += arr[r][c]);
  }

  let next = n / 2;

  let prev = arr[Math.floor(r / next)][Math.floor(c / next)] * next * next;
  answer += prev;

  return solution(next, r % next, c % next);
}

console.log(solution(2 ** N, r, c));
