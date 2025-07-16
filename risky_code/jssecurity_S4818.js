// Timing attack vulnerability in string comparison
function compareStrings(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;  // Noncompliant - timing attack vulnerability
    }
    return true;
}

// Insecure cryptographic algorithm
const crypto = require('crypto');
function hashPassword(password) {
    return crypto.createHash('md5').update(password).digest('hex');  // Noncompliant - weak hashing algorithm
}

// Cross-site request forgery (CSRF) vulnerability
const express = require('express');
const app = express();

app.post('/transfer', (req, res) => {  // Noncompliant - missing CSRF protection
    const { amount, to } = req.body;
    // Process transfer without CSRF token verification
});

// Insecure deserialization
const serialize = require('node-serialize');
function deserializeData(data) {
    return serialize.unserialize(data);  // Noncompliant - insecure deserialization
}

module.exports = { compareStrings, hashPassword, deserializeData };
