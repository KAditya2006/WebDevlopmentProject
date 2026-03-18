const currDisplay = document.querySelector('.current-display');
const prevDisplay = document.querySelector('.prev-display');
const numbers = document.querySelectorAll('.number');
const operands = document.querySelectorAll('.operation');
const clearBtn = document.querySelector('.clear');
const delBtn = document.querySelector('.delete');
const equalBtn = document.querySelector('.equal');

let currentOperand = '';
let previousOperand = '';
let operation = null;

function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return;
    currentOperand += number;
    updateDisplay();
}

function chooseOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        compute();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
    updateDisplay();
}

function compute() {
    const prev = parseFloat(previousOperand);
    const curr = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(curr)) return;

    let result;
    switch (operation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = curr !== 0 ? prev / curr : 'Error';
            break;
        default:
            return;
    }

    currentOperand = result.toString();
    operation = null;
    previousOperand = '';
    updateDisplay();
}

function updateDisplay() {
    currDisplay.innerText = currentOperand;
    prevDisplay.innerText = operation ? `${previousOperand} ${operation}` : '';
}

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = null;
    updateDisplay();
}

function deleteLast() {
    currentOperand = currentOperand.toString().slice(0, -1);
    updateDisplay();
}

// Event Listeners
numbers.forEach(number => {
    number.addEventListener('click', () => appendNumber(number.innerText));
});

operands.forEach(op => {
    op.addEventListener('click', () => chooseOperation(op.innerText));
});

equalBtn.addEventListener('click', () => compute());

clearBtn.addEventListener('click', () => clearDisplay());

delBtn.addEventListener('click', () => deleteLast());


