let currentValue;
let currentOpperator;
let currentAnswer;

let numberButtons = document.querySelectorAll('.number');
let opperatorButtons = document.querySelectorAll('.opperator');
let displayUI = document.querySelector('.display');

function setNumber(event) {
    displayUI.innerHTML = displayUI.innerHTML + ' ' + event.target.innerHTML;
    currentValue = event.target.innerHTML;
    console.log(currentValue);
}

function setOpperator(event) {
    displayUI.innerHTML = displayUI.innerHTML + ' ' + event.target.innerHTML;
    currentOpperator = event.target.classList[1];
    console.log(currentOpperator);
}


for (let button of numberButtons) {
    button.addEventListener('click', setNumber);
}

for (let button of opperatorButtons) {
    button.addEventListener('click', setOpperator);
}

function add (numOne, numTwo) {
    return numOne + numTwo;
}

function subtract (numOne, numTwo) {
    return numOne - numTwo;
}

function multiply (numOne, numTwo) {
    return numOne * numTwo;
}

function divide (numOne, numTwo) {
    return numOne / numTwo;
}

function opperation (numOne, numTwo, action) {
    switch(action) {
        case "add":
            return add(numOne, numTwo);

        case "subtract":
            return subtract(numOne, numTwo);

        case "multiply":
            return multiply(numOne, numTwo);

        case "divide":
            return divide(numOne, numTwo);
    }
}