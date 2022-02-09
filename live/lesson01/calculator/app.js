const arguments = process.argv.slice(2);
const number1 = parseFloat(arguments[0]);
const operator = arguments[1];
const number2 = parseFloat(arguments[2]);

let result = null;
if (operator == "+") {
    result = number1 + number2;
} else if (operator == "-") {
    result = number1 - number2;
} else if (operator == "/") {
    result = number1 / number2;
} else if (operator == "*") {
    result = number1 * number2;
}
console.log(result);