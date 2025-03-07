 let display = document.getElementById("display");

        function appendToDisplay(value) {
            display.value += value;
        }

        function clearDisplay() {
            display.value = "";
        }

        function deleteLast() {
            display.value = display.value.slice(0, -1);
        }

        function calculateResult() {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        }

        document.addEventListener("keydown", function (event) {
            let key = event.key;

            if (document.activeElement !== display) {
                if (!isNaN(key) || "+-*/().".includes(key)) {
                    appendToDisplay(key);
                } else if (key === "Enter") {
                    calculateResult();
                } else if (key === "Backspace") {
                    deleteLast();
                } else if (key === "Escape") {
                    clearDisplay();
                } else if (key === "s") {
                    appendToDisplay("Math.sin(");
                } else if (key === "c") {
                    appendToDisplay("Math.cos(");
                } else if (key === "t") {
                    appendToDisplay("Math.tan(");
                } else if (key === "r") {
                    appendToDisplay("Math.sqrt(");
                } else if (key === "l") {
                    appendToDisplay("Math.log(");
                } else if (key === "e") {
                    appendToDisplay("Math.exp(");
                } else if (key === "p") {
                    appendToDisplay("Math.PI");
                }
                event.preventDefault();
            }
        });

document.getElementById("background-video").playbackRate = 0.1;