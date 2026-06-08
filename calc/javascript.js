function add(numOne, numTwo) {
   return numOne + numTwo;
}

function subtract(numOne, numTwo) {
   return numOne - numTwo;
}

function multiply(numOne, numTwo) {
   return numOne * numTwo;
}

function divide(numOne, numTwo) {
   return numOne / numTwo;
}

function operate(operator, numOne, numTwo) {
   if (operator === '+') {
      return add(numOne, numTwo);
   }
   else if (operator === '-')
   {
      return subtract(numOne, numTwo);
   }
   else if (operator === '*')
   {
      return multiply(numOne, numTwo);
   }
   else if (operator === '/')
   {
      return divide(numOne, numTwo);
   }
}

// button text into display
displayElement = document.querySelector(".displayElement");

document.addEventListener("click", function(e) {
   if (e.target.tagName === 'BUTTON') {
      let buttonText = e.target.textContent;
      displayElement.textContent = buttonText;
   }
});