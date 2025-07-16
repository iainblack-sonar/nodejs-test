// Regular Expression DoS (ReDoS) vulnerability
const regexpEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  // Noncompliant - vulnerable to ReDoS

function validateEmail(email) {
    return regexpEmail.test(email);  // Can be exploited with very long input
}

// Weak random number generation
const randomValue = Math.random();  // Noncompliant - not cryptographically secure

// Command injection vulnerability
const { exec } = require('child_process');
function runCommand(userInput) {
    exec('ls ' + userInput);  // Noncompliant - command injection
}

// Insecure file operation
const fs = require('fs');
function readUserFile(filename) {
    return fs.readFileSync(filename);  // Noncompliant - path traversal vulnerability
}

module.exports = { validateEmail, runCommand, readUserFile };
