const jsonwebtoken = require('jsonwebtoken');
const pool = require("../config/database");
const Config = require('../config/env');

module.exports = {

  login: async (req,res) => {
    let connection;
    const {email, passwordHash} = req.body;
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
    try {
      connection = await pool.getConnection();
      const result = await connection.query("CALL login_user(?,?);", [email, passwordHash, ip]);
      const data = result[0][0];
      if (result[0].length === 0) {
        return res.status(401).json({ success: false, data: "Compte inconnu" });
      }
      const token = jsonwebtoken.sign(
        {
          email,
          ...data
        },
        Config.JWT_SECRET
      );
      res.set("x-access-token", token);
      req.session.id = data.id;
      req.session.email = data.email;
      res.status(200).json({
        success: true, 
        user: data,
        token: token
      })
    } catch (error) {
      res.status(400).json({error: error.message})
    } finally {
      if(connection) connection.end();
    }
  },
  logout: (req, res) => {
    const authHeader = req.headers["Authorization"];
  jsonwebtoken.sign(authHeader, "", { expiresIn: 1 }, (logout) => {
    if (logout) {
      res.status(200).json({ message: "You have been Logged Out" });
    } else {
      res.status(400).json({ message: "Error" });
    }
  });
  },
  checkLoginStatus: async(req, res) => {
    const {id, email} = req.session;
    if(id !== "" && email !== "") {
      return res.status(200).json({success: {id, email}});
    }
    res.status(401).send();  
  },
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
      const {id} = req.params;
      connection = await pool.getConnection();
      const data = await connection.query("CALL update_user(?,?,?,?,?,?,?);", [id, firstName, lastName, passwordHash, admin, vendor, registeredAt]);
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
  },
};
