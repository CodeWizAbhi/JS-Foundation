let num1 = parseFloat(prompt("Enter the first number:"));
let operator = prompt("Enter operator (+, -, *, /):");
let num2 = parseFloat(prompt("Enter the second number:"));

let result;

if (isNaN(num1) || isNaN(num2)) {
  alert("Invalid number input!");
} else {
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        alert("Cannot divide by zero!");
        result = undefined;
      }
      break;
    default:
      alert("Invalid operator!");
      result = undefined;
  }

  if (result !== undefined) {
    alert("Result: " + result);
  }
}
