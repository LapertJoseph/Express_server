const pool = require('../config/database');

module.exports = {

    selectAllUser: async (req, res) => {
    let connection;
    try {
        connection = await pool.getConnection();
        const result = await connection.query('CALL select_all_utilisateur;');
        console.log(result);
        return res.status(200).json( { success: result} );
    } catch (error) {
        return res.status(400).json( { error: error.message } );
    } finally {
        if (connection) connection.end();
    }
    },
}