/**
 * Middleware: Token validator
 */

const jsonwebtoken = require("jsonwebtoken");
const Config = require("../config/env");

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined" && bearerHeader !== null) {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    if (bearerToken !== "null") {
      jsonwebtoken.verify(
        bearerToken,
        Config.JWT_SECRET,
        function (err, decoded) {
          if (err) {
            return res.send(err);
          }
          req.decoded = decoded;
        }
      );
      req.token = bearerToken;
    }
    next();
  } else {
    next();
  }
};

module.exports = verifyToken;