function generateSequence() {
    const num = document.getElementById('userInput').value;
    const output = document.getElementById('outputArea');

    if (num === "") {
        output.innerHTML = "Please enter a number.";
        return;
    }

    let results = [];
    
    
    for (let i = 1; i <= 10; i++) {
        let product = num * i;
        results.push(`<span class="num-chip">${product}</span>`);
    }

    
    output.innerHTML = results.join(" ");
}