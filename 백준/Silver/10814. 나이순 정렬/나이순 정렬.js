const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const array = input.map((x) => x.split(" ").map((x, i) => (i === 0 ? +x : x)));

const answer = array.sort((a, b) => {
  return a[0] - b[0];
});

console.log(answer.map((x) => x.join(" ")).join("\n"));
