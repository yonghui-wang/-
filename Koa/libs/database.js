const mysql = require('mysql');
const co = require('co-mysql');

let conn = mysql.createPool({
    host: localhost,
    user: 'root',
    password: 'root',
    database: '20200616'
});
let db = co(conn);

module.exports = db;