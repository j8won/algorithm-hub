const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const map = input
  .shift()
  .split(" ")
  .map((e) => BigInt(e));
const prices = input
  .pop()
  .split(" ")
  .map((e) => BigInt(e))
  .slice(0, -1);
const totalMove = map.reduce((acc, cur) => acc + cur);

let minPrice = prices[0];
let move = 0n;
let mapIdx = 0n;
let totalPrice = 0n;

while (move < totalMove) {
  if (prices[mapIdx] < minPrice) {
    minPrice = prices[mapIdx];
  }

  totalPrice += map[mapIdx] * minPrice;
  move += map[mapIdx];
  mapIdx++;
}
console.log(String(totalPrice));
