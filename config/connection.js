var mysql = require("mysql");
var connection;
if (process.env.JAWDB_URL) {
    connection = mysql.createConnection(process.env.JAWDB_URL);
} else {
    mysql.createConnection({
        host: "localhost",
        port: 3306,
        // username
        user: "root",
        // password
        password: process.env.MYSQL_PASSWORD,
        // database name
        database: "burgers_db"
    });
};
// create database connection

connection.connect();

module.exports = connection;