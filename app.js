require("dotenv").config();
const express = require("express");
const app = express();
const route = require("./routes");
const cors = require("cors");
const session = require("express-session");

// Function which parse the body on Json with bigInt
BigInt.prototype.toJSON = function () {
  return this.toString();
};
app.use(express.json());

app.use(
  session({
    secret: "Jean-michel$123456789azertyzza",
    saveUninitialized: false,
    resave: false,
    cookie: { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 },
  })
);

const PREFIX = "/";

if (process.env.NODE_ENV === "dev") {
  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );
}
app.use(PREFIX, route);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
