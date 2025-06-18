// Sample risky code 6
const jwt = require('jsonwebtoken');
jwt.sign({foo: 'bar'}, 'shhhhh'); // Noncompliant: weak secret
