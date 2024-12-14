const jwt = require('jsonwebtoken');
jwt.verify(token, key, {
    expiresIn: 360000,
    algorithms: ['none'] // Noncompliant
}, callbackcheck);