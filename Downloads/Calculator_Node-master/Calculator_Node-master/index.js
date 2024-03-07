const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// addition route
app.get("/add/:num1/:num2", function (req, res) {
  var num1 = parseInt(req.params.num1);
  var num2 = parseInt(req.params.num2);
  var sum = (num1 + num2).toString();
  res.send(sum);
});

// subtraction route
app.get("/subtract/:num1/:num2", function (req, res) {
  var num1 = parseInt(req.params.num1);
  var num2 = parseInt(req.params.num2);
  var difference = (num1 - num2).toString();
  res.send(difference);
});

// multilication route
app.get("/multiply/:num1/:num2", function (req, res) {
  var num1 = parseInt(req.params.num1);
  var num2 = parseInt(req.params.num2);
  var product = (num1 * num2).toString();
  res.send(product);
});

// division route
app.get("/divide/:num1/:num2", function (req, res) {
  var num1 = parseInt(req.params.num1);
  var num2 = parseInt(req.params.num2);
  var quotient = (num1 / num2).toString();
  res.send(quotient);
});

// listen to server
app.listen(8000, function () {
  console.log("Successfully started express application!");
});
