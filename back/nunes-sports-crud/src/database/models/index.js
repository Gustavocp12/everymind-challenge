const mysql = require('mysql2/promise');
const configDB = require('../config.json');

const connection = mysql.createPool({
    host: configDB.development.host,
    user: configDB.development.username,
    password: configDB.development.password,
    database: configDB.development.database,
});

module.exports = connection;