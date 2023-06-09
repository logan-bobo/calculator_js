let firstValue = null;
let seccondValue = null;
let currentOpperator = null;
let freeze = false;

const numberButtons = document.querySelectorAll('.number');
const opperatorButtons = document.querySelectorAll('.opperator');
const displayUI = document.querySelector('.displayText');
const clearUI = document.querySelector('.clear');
const equalsUI = document.querySelector('.equals');
const backspaceUI = document.querySelector('.backspace');

function setNumber(event) {
    if (event.target.innerHTML === '.') {
        if (placeDot()) {
            evaluatePlacement(event);
        }
    } else {
        evaluatePlacement(event);
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
    firstValue = null;
    seccondValue = null;
    currentOpperator = null;
    displayUI.innerHTML = '';
    freeze = false;
}

function equals(){
    if (!firstValue || !seccondValue) {
        return
    }
    displayUI.innerHTML = opperation(firstValue, seccondValue, currentOpperator);
    firstValue = displayUI.innerHTML;
    seccondValue = null;
}

function placeDot(){
    return (displayUI.innerHTML.length !== 0 && !displayUI.innerHTML.includes('.'))
}

function backspace(){
    if (freeze) {
        return
    }

    displayUI.innerHTML = displayUI.innerHTML.slice(0, (displayUI.innerHTML.length - 1))
    if (firstValue && currentOpperator) {
        seccondValue = displayUI.innerHTML;
    } else {
        firstValue = displayUI.innerHTML;
    }
}

function checkLength(){
    return (displayUI.innerHTML.length < 18);
}

function evaluatePlacement(event) {
    if (freeze) {
        return
    }

    if (firstValue && currentOpperator) {
        if (!seccondValue) {
            if (event.target.innerHTML === '0') {
                clear()
                displayUI.innerHTML = 'Dont % by 0 :(';
                freeze = true;
                return
            }
            if (checkLength()) {
                displayUI.innerHTML = event.target.innerHTML;
                seccondValue = displayUI.innerHTML;
            } else {
                displayOverflow();
            }
        } else {
            if (checkLength()) {
                displayUI.innerHTML = displayUI.innerHTML + event.target.innerHTML;
                seccondValue = displayUI.innerHTML;
            } else {
                displayOverflow();
            }
        }
    } else {
        if (checkLength()) {
            displayUI.innerHTML = displayUI.innerHTML + event.target.innerHTML;
            firstValue = displayUI.innerHTML;
        } else {
            displayOverflow();
        }
    }
}

function displayOverflow () {
    freeze = true;
    displayUI.innerHTML = 'display overflow clear!'
}

clearUI.addEventListener('click', clear);
equalsUI.addEventListener('click', equals);
backspaceUI.addEventListener('click', backspace);

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
    return Math.round((numOne / numTwo) * 1000) / 1000;
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