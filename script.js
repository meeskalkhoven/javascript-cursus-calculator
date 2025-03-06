document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');

    function clearDisplay() {
        display.value = '';
    }

    function appendNumber(number) {
        console.log(number);
        display.value += number;
    }

    function appendOperator(operator) {
        display.value += ' ' + operator + ' ';
    }

    function appendDot() {
        display.value += '.';
    }

    function calculateResult() {
        try {
            display.value = eval(display.value);
        } catch (e) {
            display.value = 'Error';
        }
    }

    // Attach functions to the global scope
    window.clearDisplay = clearDisplay;
    window.appendNumber = appendNumber;
    window.appendOperator = appendOperator;
    window.appendDot = appendDot;
    window.calculateResult = calculateResult;
});
