const express = require("express");
const app = express();
const connection = require("../../helpers/db");


app.get("/", (req, res) => {
  res.send("youhou");
});

const router = express.Router();

router.post("/", (req, res) => {
  connection.query("INSERT INTO users SET ?", req.body, (error, result) => {
    if (error) {
      res.status(500).json({ flash: error.message });
    } else {
      res.status(200).json({ flash: "User has been signed up!" });
    }
  });
});


router.post('/signup', function (req, res, next) {
  res.send('I am in POST signin');
});

module.exports = router;