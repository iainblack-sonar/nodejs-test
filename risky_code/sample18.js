// Sample risky code 18
const logger = require('morgan');
app.use(logger('dev', { skip: () => false })); // May log sensitive info
