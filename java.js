let firstNum = 0;

let secondNum = 0;

let operator = "";

let displayValue = "";

function add(a, b) {

    return firstNum = a + b;

}

function subtract(a, b){

    return firstNum = a - b;

}

function multiply(a, b){

    return firstNum = a * b;

}

function divide(a, b){

    return firstNum = a / b;

}

function operate(){

    switch(operator){

        case '+':

            return add(firstNum, secondNum);
            break;

        case '-':

            return subtract(firstNum, secondNum);
            break;

        case '*':

            return multiply(firstNum, secondNum);
            break;

        case '/':

            return divide(firstNum, secondNum);
            break;
        
    }

}

const display = document.querySelector('p');

const buttons = document.querySelectorAll('.container > button');

const simbol = document.querySelectorAll('.test');

const equal = document.querySelector('.equal');

const clear = document.querySelector('#clear');

simbol.forEach((button) => {

    button.addEventListener('click', () => {

        if(operator == ""){

            operator = button.id;

            display.textContent = "";

        }else if(displayValue == ""){

            firstNum = Number(firstNum);

            secondNum = firstNum;

            display.textContent = operate();

            secondNum = 0;
        
            operator = "";

        }else {

            secondNum = displayValue;

            displayValue = "";
        
            firstNum = Number(firstNum);
        
            secondNum = Number(secondNum);
        
            display.textContent = operate();
        
            secondNum = 0;
        
            operator = ""; 

        }

        firstNum += displayValue;

        displayValue = "";

    });

});

buttons.forEach((button) => {

    button.addEventListener('click', () => {

        display.textContent += button.id;

        displayValue += button.id;

    });

});

equal.addEventListener('click', () => {

    secondNum = displayValue;

    displayValue = "";

    firstNum = Number(firstNum);

    secondNum = Number(secondNum);

    display.textContent = operate();

    secondNum = 0;

    operator = "";

})

clear.addEventListener('click', () => {

    display.textContent = "";

    displayValue = "";

    firstNum = 0;

    secondNum = 0;

    operator = "";

})