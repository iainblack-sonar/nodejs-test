// Memory leak vulnerability
const cache = {};
function memoryLeakFunction(key, value) {
    cache[key] = value;  // Noncompliant - no cache size limit or cleanup
}

// Prototype pollution
function merge(target, source) {
    for (let key in source) {
        if (typeof source[key] === 'object') {
            target[key] = merge(target[key] || {}, source[key]);  // Noncompliant - prototype pollution
        } else {
            target[key] = source[key];
        }
    }
    return target;
}

// Insecure cookie settings
const express = require('express');
const app = express();
app.use(express.cookieParser());

app.get('/login', (req, res) => {
    res.cookie('sessionId', '12345', {  // Noncompliant - missing security flags
        // Missing httpOnly flag
        // Missing secure flag
        // Missing sameSite attribute
    });
});

module.exports = { memoryLeakFunction, merge };
