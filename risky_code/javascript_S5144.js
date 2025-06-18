// S5144: Unvalidated redirect
const url = req.query.url;
res.redirect(url); // Noncompliant
