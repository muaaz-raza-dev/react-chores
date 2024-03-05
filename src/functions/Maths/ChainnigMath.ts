let Operations = {
  add,
  subtract,
  multiply,
  divide,
  result,
  power,
  factorial,
  isDivisibleBy,
};
let total = 1;
function MathOperation(number: number = 1) {
  total = number;
  return Operations;
}
function result() {
  return total;
}
function add(num: number | number[]) {
  if (typeof num == "number") total += num;
  else total += num.reduce((acc, elm) => acc + elm);
  return Operations;
}
function subtract(num: number | number[]) {
  if (typeof num == "number") total -= num;
  else total -= num.reduce((acc, elm) => acc + elm);
  return Operations;
}
function multiply(number: number) {
  total *= number;
  return Operations;
}
function divide(number: number) {
  total /= number;
  return Operations;
}
function power(number: number) {
  if (typeof number == "number") total **= number;
  return Operations;
}

function isDivisibleBy(number: number) {
  return (total / number).toLocaleString().split(".").length == 1;
}
function factorial(number: number) {
  if (number > 0) {
    let factorial: number = 1;
    for (let i = 1; i <= number; i++) {
      factorial *= i;
    }
    total *= factorial;
    return Operations;
  } else return Operations;
}

export { MathOperation };
