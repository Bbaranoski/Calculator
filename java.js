let firstNum = 0;

let secondNum = 0;

let operator = "";

let displayValue = "";

function add(a, b) {

    return a + b;

}

function subtract(a, b){

    return a - b;

}

function multiply(a, b){

    return a * b;

}

function divide(a, b){

    return a / b;

}

function operate(firstNum, secondNum, operator){

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

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', () => {

        displayValue += button.id;

        display.textContent = displayValue;

    });

});

const simbol = document.querySelector('')