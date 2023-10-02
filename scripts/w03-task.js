/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2) {
      return number1 + number2;
    }
    
    function addNumbers() {
      let num1 = parseInt(document.querySelector("#add1").value);
      let num2 = parseInt(document.querySelector("#add2").value);
      document.querySelector("#sum").value = add(num1, num2);
    }
    document.querySelector("#addNumbers").addEventListener('click', addNumbers);
    
    function subtract(number3, number4) {
      return number3 - number4;
    }
    
    function subtractNumbers() {
      let num3 = parseInt(document.querySelector("#subtract1").value);
      let num4 = parseInt(document.querySelector("#subtract2").value);
      document.querySelector("#difference").value = subtract(num3, num4);
    }
    document.querySelector("#subtractNumbers").addEventListener('click', subtractNumbers);
    
    function multiply(number5, number6) {
      return number5 * number6;
    }
    function multiplyNumbers() {
      let num5 = parseInt(document.querySelector("#factor1").value);
      let num6 = parseInt(document.querySelector("#factor2").value);
      document.querySelector("#product").value = multiply(num5, num6);
    }
    document.querySelector("#multiplyNumbers").addEventListener('click', multiplyNumbers);
    
    function divide(number7, number8) {
      if (number8 === 0) {
        return "Cannot divide by zero";
      } else {
        return number7 / number8;
      }
    }
    
    
    function divideNumbers() {
      let num7 = parseInt(document.querySelector("#dividend").value);
      let num8 = parseInt(document.querySelector("#divisor").value);
      document.querySelector("#quotient").value = divide(num7, num8);
    }
    document.querySelector("#divideNumbers").addEventListener('click', divideNumbers);
    
    let newDate = new Date();
    let currentYear;
    currentYear = newDate.getFullYear();
    document.querySelector("#year").innerHTML = currentYear;
    
    /* ARRAY METHODS */
    
    const array_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    document.querySelector("#array").innerHTML = array_1;
    
    document.querySelector("#odds").innerHTML = array_1.filter(oddNumbers);
    
    function oddNumbers(number) {
      return number % 2 != 0;
    }
    
    document.querySelector("#evens").innerHTML = array_1.filter(evenNumbers);
    
    function evenNumbers(number) {
      return number % 2 === 0;
    }
    
    document.querySelector("#sumOfArray").innerHTML = array_1.reduce(sumArray);
    
    function sumArray(total, num) {
      return total + num;
    }
    
    let new_array = array_1.map(mapArray);
    document.querySelector("#multiplied").innerHTML = new_array;
    
    function mapArray(mapNumber) {
      return mapNumber * 2;
    }
    
    document.querySelector("#sumOfMultiplied").innerHTML = new_array.reduce(newSumArray);
    
    function newSumArray(newTotal, newNum) {
      return newTotal + newNum;
    }
    