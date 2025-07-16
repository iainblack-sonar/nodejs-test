// File 4 with duplicated error handling and response formatting
function formatApiResponse(data, error) {
    // Common error handling pattern duplicated from error-handling1.js
    if (error) {
        return {
            status: 'error',
            code: error.code || 500,
            message: error.message || 'Internal server error',
            timestamp: new Date().toISOString(),
            path: error.path || '/unknown',
            requestId: Math.random().toString(36).substring(7),
            details: {
                stack: error.stack,
                type: error.type || 'UnknownError',
                severity: 'high'
            }
        };
    }

    return {
        status: 'success',
        code: 200,
        data: data,
        timestamp: new Date().toISOString(),
        requestId: Math.random().toString(36).substring(7)
    };
}

function handleError(error) {
    // Duplicate error processing logic from error-handling1.js
    console.error('Error occurred:', error);
    console.error('Stack trace:', error.stack);
    console.error('Timestamp:', new Date().toISOString());
    
    // Error categorization - duplicated across files
    let errorCategory;
    if (error.code >= 400 && error.code < 500) {
        errorCategory = 'Client Error';
    } else if (error.code >= 500) {
        errorCategory = 'Server Error';
    } else {
        errorCategory = 'Unknown Error';
    }

    return {
        category: errorCategory,
        handled: true,
        logged: true
    };
}

module.exports = {
    formatApiResponse,
    handleError
};
