function displayUserInput(userInput) {
    // Noncompliant: Direct DOM manipulation with user input
    document.getElementById('output').innerHTML = userInput;  // This will be flagged by SonarQube
    
    // The safe way would be to use textContent or proper sanitization:
    // document.getElementById('output').textContent = userInput;
}

function setCustomAttribute(element, value) {
    // Noncompliant: Using user input in setAttribute
    element.setAttribute('data-custom', value);  // This will be flagged by SonarQube
}

module.exports = { displayUserInput, setCustomAttribute };
