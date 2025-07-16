// Noncompliant: Insecure random value generation

function generateToken() {
    // Noncompliant: Using Math.random() for security-sensitive operations
    return Math.random().toString(36).substring(2);
}

function createTemporaryPassword() {
    // Noncompliant: Weak random number generation
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';
    for (let i = 0; i < 8; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

function generateSessionId() {
    // Noncompliant: Using timestamp as part of random value
    return Date.now() + Math.floor(Math.random() * 1000000);
}

module.exports = {
    generateToken,
    createTemporaryPassword,
    generateSessionId
};
