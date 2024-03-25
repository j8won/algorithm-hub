const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = +input[0];
let arr = input.slice(1).map((x) => x.split("").map(Number));

function isAllSame(x, y, n) {
  const base = arr[x][y];

  for (let i = x; i < x + N; i++) {
    for (let j = y; j < y + N; j++) {
      if (arr[i][j] !== base) return false;
    }
  }

  return true;
}

function solution(x, y, n) {
  if (n === 1) {
    return arr[x][y];
  }

  if (isAllSame(x, y, n)) {
    return arr[x][y];
  }

  let mid = Math.floor(n / 2);

  let leftTop = solution(x, y, mid);
  let rightTop = solution(x, y + mid, mid);
  let leftDown = solution(x + mid, y, mid);
  let rightDown = solution(x + mid, y + mid, mid);

  let sum = +leftTop + +rightTop + +leftDown + +rightDown;

  if (sum === 0 && n !== N) {
    return "0";
  }

  if (sum === 4 && n !== N) {
    return "1";
  }

  return `(${leftTop}${rightTop}${leftDown}${rightDown})`;
}

console.log(solution(0, 0, N));
