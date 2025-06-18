// Sample risky code 17
const cors = require('cors');
app.use(cors({origin: true})); // Noncompliant: open CORS
