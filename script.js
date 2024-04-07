function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, firstNumber, secondNumber) {
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);

    case "-":
      return subtract(firstNumber, secondNumber);

    case "*":
      return multiply(firstNumber, secondNumber);

    case "/":
      return divide(firstNumber, secondNumber);
  }
}

function updateDisplay(value) {
  const display = document.querySelector("#display");

  display.textContent = value;
  firstNumber = value;
}

let firstNumber;
let operator;
let secondNumber;

const columnContainer = document.querySelector("#column-container");

columnContainer.addEventListener("click", (event) => {
  let target = event.target;

  switch (target.id) {
    case "clear-entry":
      break;

    case "clear-all":
      break;

    case "backspace":
      break;

    case "division":
      break;

    case "number7":
      updateDisplay("7");
      break;

    case "number8":
      updateDisplay("8");
      break;

    case "number9":
      updateDisplay("9");
      break;

    case "multiplication":
      break;

    case "number4":
      updateDisplay("4");
      break;

    case "number5":
      updateDisplay("5");
      break;

    case "number6":
      updateDisplay("6");
      break;

    case "subtraction":
      break;

    case "number1":
      updateDisplay("1");
      break;

    case "number2":
      updateDisplay("2");
      break;

    case "number3":
      updateDisplay("3");
      break;

    case "addition":
      break;

    case "change-sign":
      break;

    case "number0":
      updateDisplay("0");
      break;

    case "decimal-point":
      break;

    case "result":
      break;
  }
});
