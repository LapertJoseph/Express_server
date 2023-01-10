const pool = require("../config/database");

module.exports = {
selectAllCart: async (req, res) => {
    let connection;
    try {
      connection = await pool.getConnection();
      const data = await connection.query('CALL get_all_cart;');
      res.status(200).json({success: true, data: data});
    } catch (error) {
      res.status(400).json({error: error.message});
    } finally {
      if(connection) connection.end();
    }
  },
  postCart: async (req, res) => {
    let connection;
    const {sessionId, token, status, createdAt} = req.body;
    try {
      connection = await pool.getConnection();
      const data = await connection.query('CALL post_cart(?,?,?,?);', [sessionId, token, status, createdAt]);
      res.status(200).json({success: true, data: data});
    } catch (error) {
      res.status(400).json({error: error.message});
    } finally {
      if(connection) connection.end();
    }
  },
  updateCart: async (req,res) => {
    let connection;
    const {sessionId, token, status, createdAt} = req.body;
    const {id} = req.params;
    try {
      connection = await pool.getConnection();
      const data = await connection.query('CALL update_cart(?,?,?,?,?);', [id, sessionId, token, status, createdAt]);
      res.status(200).json({success: true, data: data});
    } catch (error) {
      res.status(400).json({error: error.message});
    } finally {
      if(connection) connection.end();
    }
  },
  deleteCart: async (req, res) => {
    let connection;
    const {id} = req.params;
    try {
      connection = await pool.getConnection();
      const data = await connection.query('CALL delete_cart(?)', [id]);
      res.status(200).json({sucess: true , data: data, message: "Cart deleted"})
    } catch (error) {
      res.status(400).json({error: error.message});
    } finally {
      if(connection) connection.end();
    }
  },
}