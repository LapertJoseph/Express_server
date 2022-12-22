const pool = require("../config/database");

module.exports = {
  selectAllUser: async (req, res) => {
    let connection;
    try {
      connection = await pool.getConnection();
      const data = await connection.query("CALL get_all_users;");
      return res.status(200).json({ success: true, data: data[0] });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    } finally {
      if (connection) connection.end();
    }
  },
  postUser: async (req, res) => {
    let connection;
    try {
      const {firstName, lastName, mobile, passwordHash, admin, vendor, registeredAt} = req.body;
      connection = await pool.getConnection();
      const data = await connection.query("CALL post_user(?,?,?,?,?,?,?);", [firstName, lastName, mobile, passwordHash, admin, vendor, registeredAt]);
      return res.status(200).json({ success: true, data: data });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    } finally {
      if (connection) connection.end();
    }
  },
  updateUser: async (req, res) => {
    let connection;
    try {
      const {firstName, lastName, passwordHash, admin, vendor, registeredAt} = req.body;
      connection = await pool.getConnection();
      const data = await connection.query("CALL update_user(?,?,?,?,?,?);", [firstName, lastName, passwordHash, admin, vendor, registeredAt]);
      res.status(200).json({success: true, data: data});
    } catch (error) {
      res.status(400).json({error: error.message})
    } finally {
      if(connection) connection.end();
    }
  },
  deleteUser: async (req, res) => {
    let connection;
    try {
      const {id} = req.params;
      connection = await pool.getConnection();
      const data = await connection.query("CALL delete_user(?);", [id]);
      res.status(200).json({success: true, data: data})
    } catch (error) {
      res.status(400).json({error: error.message});
    } finally {
      if(connection) connection.end();
    }
  }
};
