var express = require("express");
var router = express.Router();
// Import the model(burger.js) to use its database functions
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required

router.get("/", function (request, response) {
  burger.selectAll(function (data) {
    var notEaten = [];
    var eaten = [];
    for (var i = 0; i < data.length; i++) {
      if (data[i].devoured === 1) {
        eaten.push(data[i]);
      } else {
        notEaten.push(data[i]);
      }
    }
    response.render("index", {
      eaten: eaten,
      noteaten: notEaten
    });

  });
});
router.post("/", function (req, res) {
  if (req.body.burger) {
    burger.insertOne([req.body.burger],function(result){
      res.redirect("/");
    });
  } else {
    res.redirect("/");
  }
});

router.put("/", function (request, response) {
  var condition = "id = " + request.body.id;
  if (condition && request.body.devoured) {
    burger.updateOne({
      devoured: request.body.devoured
    }, condition, function() {
      response.redirect("/");
    });
  } else {
    res.redirect("/");
  }
});

module.exports = router;