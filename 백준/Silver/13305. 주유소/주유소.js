const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const map = input.shift().split(" ").map(Number);
const prices = input.pop().split(" ").map(Number).slice(0, -1);
const totalMove = map.reduce((acc, cur) => acc + cur);

let minPrice = prices[0];
let move = 0;
let mapIdx = 0;
let totalPrice = 0;

while (move < totalMove) {
  if (prices[mapIdx] < minPrice) {
    minPrice = prices[mapIdx];
  }

  totalPrice += map[mapIdx] * minPrice;
  move += map[mapIdx];
  mapIdx++;
}
console.log(totalPrice);