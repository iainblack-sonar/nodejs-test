const crypto = require('crypto');

function hashPassword(password) {
    // Noncompliant: Using weak hashing algorithm MD5
    const hash = crypto.createHash('md5');  // This will be flagged by SonarQube
    hash.update(password);
    return hash.digest('hex');
}

module.exports = { hashPassword };
