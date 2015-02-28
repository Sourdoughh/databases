var mysql = require('mysql');

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

connection.query('SELECT * from messages', function(err, rows, fields){
  if(err){
    console.log('ERROR!');
  }

  // console.log('The message is', rows); //rows is stored as an array of objects
});

connection.query('INSERT into messages ( username, message ) values ( "michael", "hey there" )', function(err, rows, fields){
  if(err){
    console.log('ERROR in INSERT');
  }

  // console.log('ROWS ', rows, ' FIELDS ', fields);
} )

connection.end();
