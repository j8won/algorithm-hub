const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let cnt = 1;
let num = 666;

while (Number(input) !== cnt) {
  num++;
  if (num.toString().includes("666")) cnt++;
}

console.log(num);