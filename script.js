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

  if (value === "=" && firstNumber && operator && secondNumber) {
    if (operator === "/" && secondNumber === "0") {
      display.textContent = "( ͡° ͜ʖ ͡°) lol";

      firstNumber = null;
      operator = null;
      secondNumber = null;
    } else {
      let result = operate(operator, Number(firstNumber), Number(secondNumber));

      if (!Number.isInteger(result)) {
        result = result.toFixed(2);
      }

      result = String(result);

      display.textContent = result;

      firstNumber = result;
      operator = null;
      secondNumber = null;
    }
  } else if (value === "C") {
    display.textContent = "0";

    firstNumber = null;
    operator = null;
    secondNumber = null;
  } else if (value === "CE" && firstNumber && !operator && !secondNumber) {
    display.textContent = "0";

    firstNumber = null;
  } else if (value === "CE" && firstNumber && operator && !secondNumber) {
    display.textContent = firstNumber;

    operator = null;
  } else if (value === "CE" && firstNumber && operator && secondNumber) {
    display.textContent = operator;

    secondNumber = null;
  } else if (
    value === "<-" &&
    firstNumber &&
    ((firstNumber[0] !== "-" && firstNumber.length > 1) ||
      (firstNumber[0] === "-" && firstNumber.length > 2)) &&
    !operator &&
    !secondNumber
  ) {
    firstNumber = firstNumber.slice(0, -1);
    display.textContent = firstNumber;
  } else if (
    value === "<-" &&
    firstNumber &&
    ((firstNumber[0] !== "-" && firstNumber.length === 1) ||
      (firstNumber[0] === "-" && firstNumber.length === 2)) &&
    !operator &&
    !secondNumber
  ) {
    display.textContent = "0";

    firstNumber = null;
  } else if (value === "<-" && firstNumber && operator && !secondNumber) {
    display.textContent = firstNumber;

    operator = null;
  } else if (
    value === "<-" &&
    firstNumber &&
    operator &&
    secondNumber &&
    ((secondNumber[0] !== "-" && secondNumber.length > 1) ||
      (secondNumber[0] === "-" && secondNumber.length > 2))
  ) {
    secondNumber = secondNumber.slice(0, -1);
    display.textContent = secondNumber;
  } else if (
    value === "<-" &&
    firstNumber &&
    operator &&
    secondNumber &&
    ((secondNumber[0] !== "-" && secondNumber.length === 1) ||
      (secondNumber[0] === "-" && secondNumber.length === 2))
  ) {
    display.textContent = operator;

    secondNumber = null;
  } else if (
    value === "+/-" &&
    firstNumber &&
    firstNumber[0] !== "-" &&
    !operator &&
    !secondNumber
  ) {
    firstNumber = "-" + firstNumber;
    display.textContent = firstNumber;
  } else if (
    value === "+/-" &&
    firstNumber &&
    firstNumber[0] === "-" &&
    !operator &&
    !secondNumber
  ) {
    firstNumber = firstNumber.slice(1);
    display.textContent = firstNumber;
  } else if (
    value === "+/-" &&
    firstNumber &&
    operator &&
    secondNumber &&
    secondNumber[0] !== "-"
  ) {
    secondNumber = "-" + secondNumber;
    display.textContent = secondNumber;
  } else if (
    value === "+/-" &&
    firstNumber &&
    operator &&
    secondNumber &&
    secondNumber[0] === "-"
  ) {
    secondNumber = secondNumber.slice(1);
    display.textContent = secondNumber;
  } else if (
    value === "." &&
    firstNumber &&
    !firstNumber.includes(".") &&
    !operator &&
    !secondNumber
  ) {
    firstNumber += value;
    display.textContent = firstNumber;
  } else if (
    value === "." &&
    firstNumber &&
    operator &&
    secondNumber &&
    !secondNumber.includes(".")
  ) {
    secondNumber += value;
    display.textContent = secondNumber;
  } else if (isNaN(value) && firstNumber && operator && secondNumber) {
    if (operator === "/" && secondNumber === "0") {
      display.textContent = "( ͡° ͜ʖ ͡°) lol";

      firstNumber = null;
      operator = null;
      secondNumber = null;
    } else {
      let result = operate(operator, Number(firstNumber), Number(secondNumber));

      if (!Number.isInteger(result)) {
        result = result.toFixed(2);
      }

      result = String(result);

      display.textContent = value;

      firstNumber = result;
      operator = value;
      secondNumber = null;
    }
  } else if (
    !firstNumber &&
    !operator &&
    !secondNumber &&
    !isNaN(value) &&
    value !== "0"
  ) {
    display.textContent = value;

    firstNumber = value;
  } else if (
    firstNumber &&
    firstNumber.length < 15 &&
    !operator &&
    !secondNumber &&
    !isNaN(value)
  ) {
    firstNumber += value;
    display.textContent = firstNumber;
  } else if (
    firstNumber &&
    firstNumber.at(-1) !== "." &&
    !operator &&
    !secondNumber &&
    isNaN(value) &&
    value !== "." &&
    value !== "="
  ) {
    display.textContent = value;

    operator = value;
  } else if (firstNumber && operator && !secondNumber && !isNaN(value)) {
    display.textContent = value;

    secondNumber = value;
  } else if (
    firstNumber &&
    operator &&
    secondNumber &&
    secondNumber.length < 15 &&
    !isNaN(value)
  ) {
    secondNumber += value;
    display.textContent = secondNumber;
  }
}

let firstNumber;
let operator;
let secondNumber;

const columnContainer = document.querySelector("#column-container");

columnContainer.addEventListener("click", (event) => {
  let target = event.target;

  switch (target.id) {
    case "clear-entry":
      updateDisplay("CE");
      break;

    case "clear-all":
      updateDisplay("C");
      break;

    case "backspace":
      updateDisplay("<-");
      break;

    case "division":
      updateDisplay("/");
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
      updateDisplay("*");
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
      updateDisplay("-");
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
      updateDisplay("+");
      break;

    case "change-sign":
      updateDisplay("+/-");
      break;

    case "number0":
      updateDisplay("0");
      break;

    case "decimal-point":
      updateDisplay(".");
      break;

    case "result":
      updateDisplay("=");
      break;
  }
});
