const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const cards = input[1].split(" ").map(Number);
const numbers = input[3].split(" ").map(Number);

const map = new Map();

cards.forEach((card) => map.set(card, true));

let answer = numbers.map((num) => (map.has(num) ? 1 : 0));

// console.log(map);
console.log(answer.join(" "));
