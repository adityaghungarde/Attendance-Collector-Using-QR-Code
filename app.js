const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/" , function(req , res){
    res.sendFile(__dirname + "/index.html");
})
//TODO

app.listen(3000, function() {
  console.log("Server started on port 3000");
});