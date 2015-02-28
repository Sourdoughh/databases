var mysql = require('mysql');
var _ = require('underscore');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'chat',
  password: ''
});

connection.connect();

// build a function that will get messages from a place

exports.sqlGetFromTable = function(table){
  connection.query('SELECT * FROM ' + table, function(err, rows, fields){
    if (err) console.log('sqlGET ERROR');

    _.each(rows, function(item, index, collection){
      console.log(item['username'] + ': ' + item['message']);
    });

  });
  connection.end();
};

// build a function that will insert to a place
exports.sqlInsertMessage = function(username, message){
  connection.query("INSERT INTO messages ( username, message ) values ( '"+ username + "', '" + message + "')", function(err, rows, fields){
    if(err) console.log('ERROR in INSERT');
  });
  connection.end();
}

