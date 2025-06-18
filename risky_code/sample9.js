// Sample risky code 9
const child_process = require('child_process');
child_process.exec('rm -rf /'); // Noncompliant
