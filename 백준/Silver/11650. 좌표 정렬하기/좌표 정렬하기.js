const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
let array = input.map((x) => x.split(" ").map(Number));

array.sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1];
  else return a[0] - b[0];
});

array = array.map((x) => `${x[0]} ${x[1]}`);
console.log(array.join("\n"));
