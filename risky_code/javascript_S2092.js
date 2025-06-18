// S2092: SQL injection
const mysql = require('mysql');
const connection = mysql.createConnection({ /* ... */ });
const userId = req.query.id;
connection.query('SELECT * FROM users WHERE id = ' + userId); // Noncompliant
