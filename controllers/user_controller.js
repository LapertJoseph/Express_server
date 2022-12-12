const pool = require('../config/database');

module.exports = {

    selectAllUser: async (req, res) => {
    let connection;
    try {
        connection = await pool.getConnection();
        const result = await connection.query('CALL select_all_user;');
        console.log(result);
        return res.status(200).json( { success: result} );
    } catch (error) {
        return res.status(400).json( { error: error.message } );
    } finally {
        if (connection) connection.end();
    }
    },
    insertUser: async (req, res) => {
        let connection;
        const { name, phone, email, address, postalZip, region, country, list, alphanumeric, currency, numberrange, text } = req.body
        try {
            connection = await pool.getConnection();
            const result = await connection.query('CALL insert_user(?,?,?,?,?,?,?,?,?,?,?,?);', [name, phone, email, address, postalZip, region, country, list, alphanumeric, currency, numberrange, text]);
            return res.status(200).json({ success: result });
        } catch (error) {
            return res.status(400).json( {error: error.message}); 
        } finally {
            if (connection) connection.end();
        };
    },
    deleteUser: async (req, res) => {
        let connection;
        const {email} = req.body;
        try {
            connection = await pool.getConnection();
            const result = await connection.query('CALL delete_user(?);', [email]);
            return res.status(200).json({ success: result })
        } catch (error) {
            return res.status(400).json({ error: error.message});
        } finally {
            if (connection) connection.end();
        }
    },
    updateUser: async (req, res) => {
        let connection; 
        const {id,name, phone, email, address, postalZip, region, country, list, alphanumeric, currency, numberrange, text} = req.body;
        try {
            connection = await pool.getConnection();
            const result = await connection.query('CALL update_user(?,?,?,?,?,?,?,?,?,?,?,?,?);', [id, name, phone, email, address, postalZip, region, country, list, alphanumeric, currency, numberrange, text]);
            return res.status(200).json({success: result});
        } catch (error) {
            res.status(400).json({error: error.message});
        } finally {
            if (connection) connection.end();
        }
    },
}