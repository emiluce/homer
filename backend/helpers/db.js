const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'quest',
  password: 'quest',
  database: 'homer'
});

connection.connect((err) => {
  if (err) throw err;
  console.log("MySQL connected...");
});

module.exports = connection;