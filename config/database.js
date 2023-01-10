/**
 * Config to connect to mariadb database
 */
const mariadb = require('mariadb');
const Config = require('./env');

const pool = mariadb.createPool({
    connectionLimit: 10,
    host: Config.database.host,
    user: Config.database.user,
    password: Config.database.password,
    database: Config.database.database,
    port: Config.database.port
    
})

module.exports = pool;