var mysql = require("mysql");
var connection;
// create database connection
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
       // username
        user: "root",
        // password
        password: process.env.MYSQL_PASSWORD,
        // database name
        database: "burgers_db"
    });
}

connection.connect();
module.exports = connection;