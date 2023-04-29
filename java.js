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

const equal = document.querySelector ('.equal');

simbol.forEach((button) => {

    button.addEventListener('click', () => {

        firstNum = displayValue;

        operator = button.id;

        display.textContent += button.id;

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

    Number(firstNum);

    Number(secondNum);

    operate();

    display.textContent = operate();

})