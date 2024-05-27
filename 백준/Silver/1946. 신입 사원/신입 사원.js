const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = +input.shift();
let line = 0;

function printMaxPeopleNum(array) {
  array.sort((a, b) => a[0] - b[0]);

  let cnt = 1;
  let minRate = array.shift()[1];

  array.forEach((x) => {
    if (x[1] < minRate) {
      minRate = x[1];
      cnt++;
    }
  });

  console.log(cnt);
}

for (let i = 0; i < T; i++) {
  let peopleNum = +input[line];
  line++;
  let array = [];
  for (let j = 0; j < peopleNum; j++) {
    array.push(input[line].split(" ").map(Number));
    line++;
  }
  printMaxPeopleNum(array);
}
