var connection = require("./connection.js");
var orm = {
    all: function (tableInput, callback) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    create: function (table, cols, vals, callback) {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
        console.log(queryString);
        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    update: function (table, objColVals, condition, callback) {
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    delete: function (table, condition, callback) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    }
};

module.exports = orm;