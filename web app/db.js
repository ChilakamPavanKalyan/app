// db.js
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'your-aws-rds-endpoint',
  user: 'your-username',
  password: 'your-password',
  database: 'your-database-name'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as id', connection.threadId);
});

module.exports = connection;
