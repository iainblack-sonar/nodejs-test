// File 2 with the same validation logic duplicated
function validateCustomerInput(input) {
    if (!input) {
        throw new Error('Input is required');
    }

    if (typeof input !== 'object') {
        throw new Error('Input must be an object');
    }

    if (!input.username || typeof input.username !== 'string') {
        throw new Error('Username must be a valid string');
    }

    if (!input.email || !input.email.includes('@')) {
        throw new Error('Email must be valid');
    }

    if (!input.age || typeof input.age !== 'number') {
        throw new Error('Age must be a valid number');
    }

    return true;
}

function processCustomer(customerData) {
    // Complex data processing logic duplicated from the first file
    let result = {};
    
    result.formattedName = customerData.username.trim().toLowerCase();
    result.emailDomain = customerData.email.split('@')[1];
    result.isAdult = customerData.age >= 18;
    result.createdDate = new Date().toISOString();
    result.status = 'active';
    result.permissions = ['read', 'write'];
    
    // More duplicate processing...
    if (result.isAdult) {
        result.accessLevel = 'full';
        result.canModerate = true;
        result.reviewStatus = 'approved';
    } else {
        result.accessLevel = 'restricted';
        result.canModerate = false;
        result.reviewStatus = 'pending';
    }

    return result;
}

module.exports = {
    validateCustomerInput,
    processCustomer
};
