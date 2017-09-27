var express = require("express");
var bodyParser = require("body-parser");
var methodOverRide = require("method-override");
var connection = require("./config/connection.js");
var burger = require("./models/burger.js")
var orm = require("./config/orm.js");
var app = express();
app.use(express.static("public"));
var port = 3001;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
var notEaten = [];
var eaten = [];
app.set("view engine", "handlebars");
app.get("/", function (request, response) {
    connection.query("SELECT * FROM burgers", function (error, data) {
        if (error) {
            console.log(error);
            throw error;
        }
        for (var i = 0; i < data.length; i++) {
            if (data[i].devoured === true) {
                eaten.push(data[i]);
            } else {
                notEaten.push(data[i]);
            }
        }
        response.render("index", {
            burgers: data
        });
    });
});

app.post("/", function (req, res) {
    // Test it
    console.log('You sent, ' + req.body.burger);

    // Test it
    // res.send('You sent, ' + req.body.task);
    var query = "INSERT INTO burgers (burger_name) VALUES(?)";
    connection.query(query, [req.body.burger], function (err, result) {
        if (err) throw err;
        res.redirect("/");
    });
});

app.put("/", function (request, response) {
    console.log("receive put request");
    var query = 'UPDATE burgers SET devoured = ' 
    query += request.body.devoured;
    query += ' WHERE id=';
    query += request.body.id;
    console.log(query);
    connection.query(query, function (error, result) {
        if (error) {
            response.json({"error": erro});
        }
        response.json({"error": "none"});
    });
});

app.listen(port);