let currentDisplay = '';

function updateDisplay(value) {
    const display = document.getElementById('display');
    display.textContent = value || '0';
}

function clearDisplay() {
    currentDisplay = '';
    updateDisplay(currentDisplay);
}

function deleteLast() {
    currentDisplay = currentDisplay.slice(0, -1);
    updateDisplay(currentDisplay);
}

function appendNumber(number) {
    if (currentDisplay === '0' && number !== '.') {
        currentDisplay = '';
    }
    currentDisplay += number;
    updateDisplay(currentDisplay);
}

function appendOperator(operator) {
    if (currentDisplay && !isNaN(currentDisplay.slice(-1))) {
        currentDisplay += operator;
        updateDisplay(currentDisplay);
    }
}

function calculate() {
    try {
        currentDisplay = eval(currentDisplay).toString();
        updateDisplay(currentDisplay);
    } catch {
        updateDisplay('Error');
        currentDisplay = '';
    }
}
