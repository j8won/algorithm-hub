const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [size, ...arr] = input;
const [N, M] = size.split(" ");

const whiteFirstBoard = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const blackFirstBoard = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

function paintWhite(x, y) {
  let count = 0;

  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      if (arr[i][j] !== whiteFirstBoard[i - y][j - x]) count++;
    }
  }

  return count;
}

function paintBlack(x, y) {
  let count = 0;

  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      if (arr[i][j] !== blackFirstBoard[i - y][j - x]) count++;
    }
  }

  return count;
}

let answer = 32;

for (let i = 0; i + 7 < N; i++) {
  for (let j = 0; j + 7 < M; j++) {
    if (answer > paintWhite(j, i)) answer = paintWhite(j, i);
    if (answer > paintBlack(j, i)) answer = paintBlack(j, i);
  }
}

console.log(answer);
