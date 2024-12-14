const crypto = require('crypto');

function callback(err, pub, priv) {}

var { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 1024,  // Noncompliant
    publicKeyEncoding:  { type: 'spki', format: 'pem' },
    privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
  },
  callback);