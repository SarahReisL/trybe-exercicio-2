// Funçao de soma-
const sum = (num1, num2) => {
  return num1 + num2;
}

// Funçao de sub
const sub = (num1, num2) => {
  return num1 - num2;
}
// console.log(sum(1, 2));

// Funçao calculate()
const calculate = (callback, value1, value2) => {
  const result = callback(value1, value2);
  return result;
}
console.log(calculate(sum, 3, 2));