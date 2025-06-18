// S3330: Sensitive data in logs
const password = req.body.password;
console.log('User password is: ' + password); // Noncompliant
