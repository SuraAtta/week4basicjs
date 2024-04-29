const fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];

function checkVotingEligibility(age) {
  if (age >= 18) {
    return 'You are eligible for voting';
  } else {
    return 'You are not eligible for voting';
  }
}

function printNumbersWithWhile() {
  let i = 1;
  while (i <= 5) {
    console.log(i);
    i++;
  }
}

function printEvenNumbersWithFor() {
  for (let i = 2; i <= 10; i += 2) {
    console.log(i);
  }
}

function getDayOfWeek(day) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  if (day >= 1 && day <= 7) {
    return days[day - 1];
  } else {
    return 'Invalid day';
  }
}

function sum(num1, num2) {
  return num1 + num2;
}

module.exports = {
  checkVotingEligibility,
  printNumbersWithWhile,
  printEvenNumbersWithFor,
  getDayOfWeek,
  sum,
  fruits,
};