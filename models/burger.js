var express = require("express");
var orm = require("../config/orm.js");
var connection = require("../config/connection.js")



var burger = {
    all: function (callback) {
        orm.all("burgers", function (response) {
            callback(response);
        });
    },
    // The variables columns and values are array
    create: function(callback) {
        orm.create("burgers",cols,vals,function(response){
            callback(response);
        });
    },
    update: function(objColVals,condition,callback) {
        orm.update("burgers",objColVals,condition,function(response){
            callback(response);
        });
    },
    delete: function(cols,vals,callback) {
        orm.delete("burger_name",function(response){
            callback(response);
        });
    }
};
// Export the database functions for the controller (burgers_controller.js)
module.exports = burger;