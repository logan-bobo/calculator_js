let firstValue = null;
let seccondValue = null;
let currentOpperator = null;

const numberButtons = document.querySelectorAll('.number');
const opperatorButtons = document.querySelectorAll('.opperator');
const displayUI = document.querySelector('.display');
const clearUI = document.querySelector('.clear');
const equalsUI = document.querySelector('.equals')

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
        displayUI.innerHTML = opperation(firstValue, seccondValue, currentOpperator);
        firstValue = displayUI.innerHTML;
        currentOpperator = event.target.classList[1];
        seccondValue = null;
    }
    currentOpperator = event.target.classList[1];
}

function clear(){
    console.log('test')
    firstValue = null;
    seccondValue = null;
    currentOpperator = null;
    displayUI.innerHTML = '';
}

function equals(){
    if (!firstValue || !seccondValue) {
        return
    }
    displayUI.innerHTML = opperation(firstValue, seccondValue, currentOpperator);
    firstValue = displayUI.innerHTML;
    seccondValue = null;
}

clearUI.addEventListener('click', clear);
equalsUI.addEventListener('click', equals);

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