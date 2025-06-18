// Sample risky code 10
const express = require('express');
const app = express();
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*'); // Noncompliant
  next();
});
