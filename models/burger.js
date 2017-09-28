var express = require("express");
var orm = require("../config/orm.js");
var connection = require("../config/connection.js")

var burger = {
    selectAll: function (callback) {
        orm.selectAll("burgers", function (response) {
            callback(response);
        });
    },
    // The variables columns and values are array
    insertOne: function(burgerName,callback) {
        orm.insertOne("burgers",["burger_name", "devoured"],[burgerName, false],callback);       
    },
    updateOne: function(objColVals,condition,callback) {
        orm.updateOne("burgers",objColVals,condition,function(response){
            callback(response);
        });
    }
};
// Export the database functions for the controller (burgers_controller.js)
module.exports = burger;