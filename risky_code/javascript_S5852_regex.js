// Noncompliant: Regular expression denial of service (ReDoS) vulnerabilities

function validateEmail(email) {
    // Noncompliant: Vulnerable to ReDoS
    const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    // Noncompliant: Complex regex pattern vulnerable to ReDoS
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

function findNestedTags(html) {
    // Noncompliant: Catastrophic backtracking possible
    const tagRegex = /<(\w+)>.*<\/\1>/g;
    return html.match(tagRegex);
}

module.exports = {
    validateEmail,
    validatePassword,
    findNestedTags
};
