// S5876: Session fixation
const express = require('express');
const passport = require('passport');
const app = express();
app.post('/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    // Noncompliant - no session.regenerate after login
    res.redirect('/');
  });
