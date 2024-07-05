let display = document.getElementById('display');
let buttons = Array.from(document.querySelectorAll('button'));
let currentInput = '';

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let text = e.target.textContent;

        if (text === '=') {
            currentInput = eval(currentInput).toString();
        } else if (text === 'DEL') {
            currentInput = currentInput.slice(0, -1);
        } else if (text === 'RESET') {
            currentInput = '';
        } else {
            currentInput += text;
        }
        updateDisplay();
    });
});

function updateDisplay() {
    display.textContent = currentInput === '' ? '0' : currentInput;
    console.log(currentInput);
}

updateDisplay();