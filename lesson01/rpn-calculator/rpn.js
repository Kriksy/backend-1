const inputs = process.argv.slice(2);

const operators = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "/": (x, y) => x / y,
  "*": (x, y) => x * y
};

const stack = [];
while (inputs.length > 0) {
  const input = inputs.shift();
  const operator = operators[input];
  if (operator) {
    const [second, first] = [stack.pop(), stack.pop()];
    stack.push(operator(first, second));
  } else {
    stack.push(parseFloat(input));
  }
}
console.log(stack[0]);
