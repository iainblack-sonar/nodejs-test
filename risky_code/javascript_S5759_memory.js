const fs = require('fs');
const EventEmitter = require('events');

// Noncompliant: Memory leak in event emitter
function createLeakyEmitter() {
    const emitter = new EventEmitter();
    setInterval(() => {
        // Adding listeners without removing them
        emitter.on('data', () => {
            console.log('data received');
        });
    }, 1000);
    return emitter;
}

// Noncompliant: Resource leak - file handle not properly closed
function readFileUnsafe(path) {
    const stream = fs.createReadStream(path);
    // No error handling or proper stream closure
    stream.on('data', (chunk) => {
        console.log(chunk);
    });
}

// Noncompliant: Memory leak in closure
function createClosureLeak() {
    const leakedData = [];
    return function() {
        const hugeMem = new Array(1000000);
        leakedData.push(hugeMem);
        // The hugeMem array is never cleared
    };
}

module.exports = {
    createLeakyEmitter,
    readFileUnsafe,
    createClosureLeak
};
