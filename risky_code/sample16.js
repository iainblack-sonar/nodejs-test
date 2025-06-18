// Sample risky code 16
const express = require('express');
const app = express();
app.get('/admin', (req, res) => {
  res.send('admin'); // No authentication
});
