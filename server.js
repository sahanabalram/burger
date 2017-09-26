var express = require("express");
var bodyParser = require("body-parser");
var methodOverRide = require("method-override");
var connection = require("./config/connection.js");

var app = express();
var port = 3001;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

app.get("/", function (request, response) {
    connection.query("SELECT * FROM burgers;", function (error, data) {
        if (error) throw error;

        // Test it
        // console.log('The solution is: ', data);

        // Test it
        // res.send(data);

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
    var query = 'INSERT INTO burgers (burger_name,devoured,date)' +
        ' VALUES(?,false,"2017-09-25")';
    connection.query(query, [req.body.burger], function (err, result) {
        if (err) throw err;
        res.redirect("/");
    });
});
app.listen(port);