const app = express();
const express = require("express");

app.get("/", (req, res) => {
  res.send("youhou");
})

const router = express.Router();

router.post('/signup', function (req, res, next) {
  res.send('I am in POST signup');
});


module.exports = router;