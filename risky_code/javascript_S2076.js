// S2076: OS command injection
const { exec } = require('child_process');
const userInput = req.query.cmd;
exec(userInput); // Noncompliant
