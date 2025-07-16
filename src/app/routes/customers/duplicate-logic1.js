// File 1 with duplicated validation logic
function validateUserInput(input) {
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

function processUser(userData) {
    // Complex data processing logic duplicated across files
    let result = {};
    
    result.formattedName = userData.username.trim().toLowerCase();
    result.emailDomain = userData.email.split('@')[1];
    result.isAdult = userData.age >= 18;
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
    validateUserInput,
    processUser
};
