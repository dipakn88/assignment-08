document.getElementById('generate').addEventListener('click', function() {
    // Get the input values
    const sentence = document.getElementById('sentence').value;
    const number = parseInt(document.getElementById('number').value);
    const outputList = document.getElementById('outputList');

    // Clear previous output
    outputList.innerHTML = '';

    // Validate input
    if (sentence && number > 0) {
        for (let i = 0; i < number; i++) {
            const listItem = document.createElement('li');
            listItem.textContent = sentence;
            outputList.appendChild(listItem);
        }
    } else {
        alert("Please enter a valid sentence and a number greater than 0.");
    }
});