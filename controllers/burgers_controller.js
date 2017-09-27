var express = require("express");
var router = express.Router();
// Import the model(burger.js) to use its database functions
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required

router.get("/",function(request,response){
    burger.all(function(data){
        var hbsObject = {
            burger:data
        };
        console.log(hbsObject);
        res.render("index",hbsObject);
    });
});

router.post("/", function(req, res) {
    cat.create([
      "burger_name", "veggieBurger"
    ], [
      req.body.name, req.body.veggieBurger
    ], function() {
      res.redirect("/");
    });
  });