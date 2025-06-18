// Sample risky code 2
const fs = require('fs');
fs.chmodSync('/etc/passwd', 0o777); // Noncompliant
