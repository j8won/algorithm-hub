const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const cards = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const M = +input[2];
const numbers = input[3].split(" ").map(Number);


let obj = {};

cards.forEach((card) => {
  if (obj[card]) obj[card]++;
  else obj[card] = 1;
});


let answer = [];

for (let num of numbers) {
  let left = 0;
  let right = cards.length - 1;

  let isInCards = false;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (cards[mid] > num) {
      right = mid - 1;
    } else if (cards[mid] < num) {
      left = mid + 1;
    } else {
      isInCards = true;
      answer.push(obj[num]);
      break;
    }
  }
  isInCards || answer.push(0);
}
console.log(answer.join(" "));
