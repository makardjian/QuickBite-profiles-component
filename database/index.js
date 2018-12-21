const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const db = mysql.createConnection(mysqlConfig);

module.exports = db;