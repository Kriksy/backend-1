// NB: Can also use destructuring here
const input = process.argv.slice(2);
let [operand1, operator, operand2] = input;
operand1 = parseFloat(operand1);
operand2 = parseFloat(operand2);
console.log(calculate(operator, operand1, operand2));

function calculate(operator, operand1, operand2) {
  switch (operator) {
    case "+":
      return operand1 + operand2;
    case "-":
      return operand1 - operator;
    case "/":
      return operand1 / operand2;
    case "*":
      return operand1 * operand2;
    default:
      throw `Unknown operator: ${operator}`;
  }
}

// function calculate(operator, operand1, operand2) {
//   const f = {
//     "+": (x, y) => x + y,
//     "-": (x, y) => x - y,
//     "/": (x, y) => x / y,
//     "*": (x, y) => x * y
//   }[operator];
//   if (!f) {
//       throw `Unknown operator: ${operator}`;
//   }
//   return f(operand1, operand2)
// }
