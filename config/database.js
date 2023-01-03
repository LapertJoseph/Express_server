const mariadb = require('mariadb');


const pool = mariadb.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'abc',
    database: 'prod',
    port: 3306
    
})

module.exports = pool;