const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

/**
 * N: 한 변의 길이
 * 2,4,8,16,32,64,128
 * 하얀색 0 파란색 1
 * 첫
 */

const N = +input[0];
const arr = input.slice(1).map((x) => x.split(" ").map(Number));

function isSameColor(x, y, length) {
  const base = arr[x][y];
  for (let i = x; i < x + length; i++) {
    for (let j = y; j < y + length; j++) {
      if (arr[i][j] !== base) return false;
    }
  }
  return true;
}

let blue = 0;
let white = 0;

function solution(x, y, length) {
  if (isSameColor(x, y, length)) {
    if (arr[x][y] === 1) blue++;
    else white++;
    return;
  }

  const half = length / 2;
  solution(x, y, half);
  solution(x, y + half, half);
  solution(x + half, y, half);
  solution(x + half, y + half, half);
}

solution(0, 0, N);

console.log(white + "\n" + blue);
