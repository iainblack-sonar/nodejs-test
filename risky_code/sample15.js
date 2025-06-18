// Sample risky code 15
const zlib = require('zlib');
zlib.gunzip(Buffer.from('invalid'), (err, result) => {}); // Error not handled
