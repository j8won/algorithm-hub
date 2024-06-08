const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const testCase = +input.shift();

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

function solution(str) {
  if (isPalindrome(str)) return console.log(0);

  let isPseudo = false;
  let n = str.length;
  for (let i = 0; i < parseInt(n / 2); i++) {
    if (str[i] !== str[n - i - 1]) {
      if (isPalindrome(str.slice(0, i) + str.slice(i + 1))) isPseudo = true;
      if (isPalindrome(str.slice(0, n - i - 1) + str.slice(n - i)))
        isPseudo = true;
      break;
    }
  }

  if (isPseudo) return console.log(1);
  return console.log(2);
}

for (let x of input) {
  solution(x);
}
