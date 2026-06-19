const inputField = document.getElementById("userInput");
const calculateButton = document.getElementById("calculateBtn");
const outputText = document.getElementById("dynamicText");

calculateButton.addEventListener("click", function() {
    let num = parseInt(inputField.value);
    let result = 1;

    for (let i = 1; i <= num; i++) {
        result = result * i;
    }

    outputText.innerHTML = "The factorial of <strong>" + num + "</strong> is: <br><br><span style='font-size: 20px; color: #27ae60; font-weight: bold;'> " + result + "</span>";
});
