// Noncompliant: Various null reference and type issues
function processData(data) {
    let result;
    
    // Noncompliant: Using undefined variable
    if (undefinedVar > 0) {  // ReferenceError: undefinedVar is not defined
        result = "positive";
    }
    
    // Noncompliant: Missing return statement in some paths
    if (data) {
        return "has data";
    }
    // No return statement here - undefined will be returned
}

// Noncompliant: Incorrect type handling
function calculateTotal(items) {
    let total = 0;
    
    items.forEach(item => {
        // Noncompliant: No type checking before arithmetic
        total += item.price;  // Will return NaN if price is undefined
    });
    
    // Noncompliant: Division without checking for zero
    const average = total / items.length;  // Will return Infinity if items is empty
    
    return average;
}

// Noncompliant: Promise handling issues
async function fetchUserData(userId) {
    // Noncompliant: No error handling
    const response = await fetch(`/api/users/${userId}`);
    
    // Noncompliant: Missing await
    return response.json();  // Returns a promise instead of the data
}

// Noncompliant: Race condition
let sharedCounter = 0;
function incrementCounter() {
    // Noncompliant: Race condition in async operation
    setTimeout(() => {
        const current = sharedCounter;
        sharedCounter = current + 1;  // Race condition: value might have changed
    }, 100);
}

module.exports = {
    processData,
    calculateTotal,
    fetchUserData,
    incrementCounter
};
