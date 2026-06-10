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

let firstNum = '';
let secondNum = '';
let operation = '';
let selectedOperator = '';

displayElement = document.querySelector(".displayElement");
digit = document.querySelectorAll(".digit");
operators = document.querySelectorAll(".operators button");
equals = document.querySelector(".equals");
clear = document.querySelector(".clear");

// Before operator is selected, store firstNum
digit.forEach(btn => {
   btn.addEventListener("click", function(e) {
      if (operation === '') {
         firstNum += e.target.textContent;
         displayElement.textContent = firstNum;
      } else { // After operator is selected, store secondNum
         selectedOperator.style.backgroundColor = '';
         selectedOperator.style.color = '';
         secondNum += e.target.textContent;
         displayElement.textContent = secondNum;
      }
   });
});

// clicking operator button stores its sign
operators.forEach(btn => {
   btn.addEventListener("click", function(e) {
      if (operation != '' && secondNum != '') { // user inputs second operator
         let result = operate(operation, Number(firstNum), Number(secondNum));
         if (!Number.isInteger(result)) 
            result = result.toFixed(2);
         displayElement.textContent = result;

         firstNum = result.toString();
         secondNum = '';
      }
      selectedOperator = e.target;
      selectedOperator.style.backgroundColor = 'rgb(255, 109, 134)';
      selectedOperator.style.color = 'white';
      operation = e.target.textContent;
   });
});

// equal button calls and returns operate()
equals.addEventListener("click", function() {
   selectedOperator.style.backgroundColor = '';
   selectedOperator.style.color = '';
   let result = operate(operation, Number(firstNum), Number(secondNum));
   if (!Number.isInteger(result))
      result = result.toFixed(2);
   displayElement.textContent = result;
   
});

// clear button resets display and stored variables
clear.addEventListener("click", function() {
   displayElement.textContent = 'DISPLAY';
   firstNum = '';
   secondNum = '';
   operation = '';
   selectedOperator.style.backgroundColor = '';
   selectedOperator.style.color = '';
});

// keyboard input
document.addEventListener("keydown", function(e) {
   const key = e.key;

   if (!isNaN(key)) { // digits
      if (operation === '') { 
         firstNum += key; 
         displayElement.textContent = firstNum;
      } else {
         secondNum += key;
         displayElement.textContent = secondNum;
      }
      return;
   }

   if ('+-*/'.includes(key)) { // operators
      operators.forEach(sign => {
         if (sign.textContent === key) {
            sign.click();
         }
      });
      return;
   }
   if (key === 'Enter') { // equals
      equals.click();
      return;
   } 
       
   if (key === 'Escape') { // clear
      clear.click();
      return; 
   }   
});