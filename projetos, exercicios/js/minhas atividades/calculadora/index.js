
const display = document.getElementById("display");
const keys = document.getElementById("keys");

// Funções da calculadora
function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch(error) {
        display.value = "Error";
    }
}

// Adicionando event listeners
keys.addEventListener("click", (e) => {
    if (e.target.matches("button")) {
        const value = e.target.dataset.value;
        
        if (value) {
            appendToDisplay(value);
        } else if (e.target.id === "calculate") {
            calculate();
        } else if (e.target.id === "clear") {
            clearDisplay();
        }
    }
});