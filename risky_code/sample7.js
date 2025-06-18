// Sample risky code 7
const net = require('net');
net.createServer().listen(23); // Noncompliant: default telnet port
