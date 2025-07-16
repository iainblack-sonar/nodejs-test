function setCookie(response) {
    // Noncompliant: Cookie without secure flag
    response.cookie('sessionId', 'abc123', {
        httpOnly: true,
        // secure: true  // This should be set for security
    });

    // Noncompliant: Cookie without httpOnly flag
    response.cookie('userPrefs', 'theme:dark', {
        secure: true
        // httpOnly: true  // This should be set for security
    });
}

module.exports = { setCookie };
