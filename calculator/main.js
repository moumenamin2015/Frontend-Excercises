let firstOperand = null;
let operation = null;
let secondOperand = null;
let calculated = false;
const load = () => {
  let calcBtn = document.querySelector(".calculator");
  calcBtn.addEventListener("click", function(evt) {
    let result = document.querySelector(".result");
    let clickedBtn = evt.target;
    var clickedBtnClasses = clickedBtn.classList;
    if (clickedBtnClasses.contains("operator")) {
      var sign = clickedBtn.getAttribute("data-operation");
      switch (sign) {
        case "+":
          setOperator("+");
          break;
        case "-":
          setOperator("-");
          break;
        case "*":
          setOperator("*");
          break;
        case "/":
          setOperator("/");
          break;
        case "=":
          calculate();
      }
    } else {
      if (clickedBtn.innerHTML === "C") {
        clearResult();
        clearData();
        return;
      }
      addToResult(clickedBtn.innerHTML);
    }
  });
};
window.onload = load;
const addToResult = value => {
  if (calculated) {
    clearResult();
    clearData();
    calculated = false;
  }
  let result = document.querySelector(".result");
  result.append(value);
};
const clearData = () => {
  firstOperand = null;
  secondOperand = null;
  operation = null;
};
const clearResult = () => {
  let result = document.querySelector(".result");
  result.innerHTML = "";
};
const setOperator = sign => {
  if (calculated) {
    clearResult();
    clearData();
    calculated = false;
  }
  let result = document.querySelector(".result");
  if (!firstOperand) {
    firstOperand = parseInt(result.innerHTML);
  }
  if (operation != null) clearCharsResult(1);
  if (firstOperand) {
    operation = sign;
    addToResult(sign);
  }
};
const clearCharsResult = count => {
  let result = document.querySelector(".result");
  result.innerHTML = result.innerHTML.slice(0, result.innerHTML.length - count);
};
const calculate = () => {
  let result = document.querySelector(".result");
  secondOperand = parseInt(result.innerHTML.split(operation)[1]);
  switch (operation) {
    case "+":
      clearResult();
      addToResult(firstOperand + secondOperand);
      calculated = true;
      break;
    case "-":
      clearResult();
      addToResult(firstOperand - secondOperand);
      calculated = true;
      break;
    case "*":
      clearResult();
      addToResult(firstOperand * secondOperand);
      calculated = true;
      break;
    case "/":
      clearResult();
      addToResult(firstOperand / secondOperand);
      calculated = true;
      break;
  }
};
