// Sample risky code 1
const userInput = req.query.input;
eval(userInput); // Noncompliant
