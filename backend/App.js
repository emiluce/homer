
// declare all the necessary libraries
const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

// set up the application
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// implement the API part
app.get("/", (req, res) => {
  res.send("youhou");
})

app.use("/auth", require("./routes/auth/auth"));

app.get("/auth/signup", (req, res) => {
  res.send("I am in POST signup");
});

// launch the node server
let server = app.listen(process.env.PORT || 5000, function () {
  console.log('Listening on port ' + server.address().port);
});

