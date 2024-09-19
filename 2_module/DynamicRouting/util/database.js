const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'ecommerce',
    password: 'bbec2253'
});

module.exports = pool.promise();