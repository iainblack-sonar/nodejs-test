const mysql = require('mysql');

function getUserData(userId) {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'userdb'
    });

    // Noncompliant: SQL injection vulnerability
    const query = `SELECT * FROM users WHERE id = ${userId}`;
    connection.query(query, (error, results) => {
        if (error) throw error;
        return results;
    });
}

function searchUsers(searchTerm) {
    // Noncompliant: Another SQL injection vulnerability
    const unsafeQuery = "SELECT * FROM users WHERE username LIKE '%" + searchTerm + "%'";
    return connection.query(unsafeQuery);
}

module.exports = { getUserData, searchUsers };
