// Sample risky code 12
const db = require('mysql');
db.query('SELECT * FROM users WHERE id=' + req.query.id); // SQL Injection
