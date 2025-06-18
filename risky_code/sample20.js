// Sample risky code 20
const express = require('express');
const app = express();
app.get('/debug', (req, res) => {
  res.send(process.env);
}); // Exposes environment variables
