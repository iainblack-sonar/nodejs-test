function connectToDatabase() {
    // Noncompliant: Hardcoded credentials
    const password = "mySecretPassword123";  // This will be flagged by SonarQube
    const connection = {
        host: 'localhost',
        user: 'admin',
        password: password
    };
    return connection;
}

module.exports = { connectToDatabase };
