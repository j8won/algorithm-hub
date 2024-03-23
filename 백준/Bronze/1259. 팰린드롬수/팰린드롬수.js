const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let str = "";

for (let i = 0; i < input.length - 1; i++) {
  str +=
    input[i].trim().split("").reverse().join("") === input[i].trim()
      ? "yes\n"
      : "no\n";
}

console.log(str);