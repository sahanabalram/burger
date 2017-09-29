var express = require("express");
var bodyParser = require("body-parser");
var methodOverRide = require("method-override");
var connection = require("./config/connection.js");
var burger = require("./models/burger.js")
var orm = require("./config/orm.js");
var app = express();
var ROUTERAPI = require("./controllers/burgers_controller.js");
app.use(express.static("public"));

var PORT = process.env.PORT || 3001;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use('/', ROUTERAPI);

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");
app.listen(PORT, function () {
	console.log("App listening on PORT " + PORT);
});