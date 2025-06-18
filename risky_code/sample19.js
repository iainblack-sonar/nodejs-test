// Sample risky code 19
const helmet = require('helmet');
app.use(helmet({ contentSecurityPolicy: false })); // Noncompliant
