// Noncompliant: Various array and collection handling issues
class DataProcessor {
    constructor() {
        this.cache = new Map();
    }

    // Noncompliant: Incorrect array modification during iteration
    removeEvenNumbers(numbers) {
        // Bug: Modifying array while iterating
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] % 2 === 0) {
                numbers.splice(i, 1);  // Changes array length during iteration
            }
        }
        return numbers;
    }

    // Noncompliant: Memory leak in cache management
    addToCache(key, value) {
        // Bug: Cache grows indefinitely
        this.cache.set(key, value);
        // Never removes old entries
    }

    // Noncompliant: Off-by-one errors
    getLastNElements(arr, n) {
        // Bug: Incorrect slice parameters
        return arr.slice(arr.length - n - 1, arr.length);  // Will include one extra element
    }

    // Noncompliant: Incorrect comparison
    findDuplicates(items) {
        const result = [];
        
        // Bug: Using non-strict comparison
        for (let i = 0; i < items.length; i++) {
            for (let j = i + 1; j < items.length; j++) {
                if (items[i] == items[j]) {  // Will match '1' and 1
                    result.push(items[i]);
                }
            }
        }
        
        return result;
    }

    // Noncompliant: Async resource handling
    async processFile(filename) {
        const file = await fs.open(filename, 'r');
        // Bug: No try-catch and no file closing
        const content = await file.readFile();
        return content;
        // Resource leak: file is never closed
    }
}

module.exports = DataProcessor;
