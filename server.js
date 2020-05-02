//set up dependencies
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var router = require("./controllers/burgers_controller.js");
var path = require("path");

//creates express server and sets up a port
var app = express(); 
var PORT = process.env.PORT || 8080; 

//Body Parser (Middleware)
//app.use(methodOverride("_method"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Set up rendering engine, Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static files and routes (middleware)
app.use(express.static(__dirname + "/public"));
app.use("/", router);


//Listening to the port that was set up
app.listen(PORT, function() {
    console.log("Server listening on : http://localhost:", PORT);
});