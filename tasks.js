// Task 1
function checkVotingEligibility(age) {
  if (age >= 18)
    console.log("You are eligible for voting,")
  else
    console.log("You are not eligible for voting.")
}

// Task 2
function printNumbersWithWhile() {
  let i = 1;

  while (i <= 5) {
    console.log(i);
    i++;
  }
}

// Task 3
function printEvenNumbersWithFor() {
  for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
      console.log(i)
    }
  }
}

// Task 4
function getDayOfWeek(number) {
  switch (number) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Invalid day";
  }
}

// Task 5
function sum(x, y) {
  return x + y;
}

// Task 6

function logEachFruit() {
  const fruits = ["apple", "banana", "orange", "grape", "mango"];

  fruits.forEach((fruit) => {
    console.log(fruit);
  });
}


module.exports = {
  checkVotingEligibility,
  printNumbersWithWhile,
  printEvenNumbersWithFor,
  getDayOfWeek,
  sum,
  logEachFruit,
};
const utils = require('./tasks');

console.log(utils.logEachFruit());

console.log(utils.getDayOfWeek(2))
