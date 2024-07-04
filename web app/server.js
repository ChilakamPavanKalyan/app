// server.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const port = 3000;

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Route to handle form submission
app.post('/register', (req, res) => {
  const { firstName, lastName, email, password, dob, phone, height, weight, gender } = req.body;

  const query = 'INSERT INTO users (first_name, last_name, email, password, dob, phone, height, weight, gender) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [firstName, lastName, email, password, dob, phone, height, weight, gender];

  db.query(query, values, (error, results) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.send('User registered successfully!');
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
