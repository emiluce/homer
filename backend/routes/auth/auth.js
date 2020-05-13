const express = require("express");
const app = express();
const router = express.Router();
const connection = require("../../helpers/db");

const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");




/*app.get("/", (req, res) => {
  res.send("youhou");
});*/




router.post("/login", (req, res) => {

  console.log(req.body);

  const { email, password };

  connection.query(
    "SELECT * FROM users WHERE id = ?",
    email,
    (err, users) => {

      const user = users[0];


      const hashPassword = user.password;

      let isSame = bcrypt.compareSync(Password, hashPassword);

      if (!isSame) {
        return res.status(401).send({ msg: "Password is incorrect" });
      }

      const token = jwt.sign({ id: user.id }, "secret");
      res.send({
        token,
      });
    }
  );
});




router.post("/signup", (req, res) => {
  const { email, password, name, lastname } = req.body;

  let hash = bcrypt.hashSync(password, 10);

  connection.query("INSERT INTO users SET ?", { email, password, name, lastname },
    (error, result) => {
      if (err) {
        return res.status(400).send({ error: err });
      }

      res.send({
        id: result.insertId,
        email,
        name,
        lastname,
      });
    }
  );
});


module.exports = router;