let firstValue = null;
let seccondValue = null;
let currentOpperator = null;

let numberButtons = document.querySelectorAll('.number');
let opperatorButtons = document.querySelectorAll('.opperator');
let displayUI = document.querySelector('.display');
let clearUI = document.querySelector('.clear');

function setNumber(event) {
    if (firstValue && currentOpperator){
        if (!seccondValue) {
            displayUI.innerHTML = event.target.innerHTML;
            seccondValue = displayUI.innerHTML;
        } else {
            displayUI.innerHTML = displayUI.innerHTML + event.target.innerHTML;
            seccondValue = displayUI.innerHTML;
        }
    } else {
        displayUI.innerHTML = displayUI.innerHTML + event.target.innerHTML;
        firstValue = displayUI.innerHTML;
    }
}

function setOpperator(event) {
    if (firstValue && seccondValue && currentOpperator) {
        displayUI.innerHTML = opperation(firstValue, seccondValue, currentOpperator)
        firstValue = displayUI.innerHTML;
        currentOpperator = event.target.classList[1];
        seccondValue = null;
    }
    currentOpperator = event.target.classList[1];
}

function clear(event){
    console.log('test')
    firstValue = null;
    seccondValue = null;
    currentOpperator = null;
    displayUI.innerHTML = '';
}

clearUI.addEventListener('click', clear);

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
    numOne = Number(numOne);
    numTwo = Number(numTwo);

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