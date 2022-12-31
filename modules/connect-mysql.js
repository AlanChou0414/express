// import [mysql2] modules;
const mysql = require('mysql2');

// use createConnection() to connect mySQL;
const pool = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 8889,
  database: 'member_information',
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
});

module.exports = pool;
