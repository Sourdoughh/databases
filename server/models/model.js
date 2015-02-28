var db = require('../db/database');
var http = require('http');
var fs = require('fs');



module.exports = {
  messages: {
    GET: function (req, res) {
      db.sqlGetFromTable('messages');
    }, // a function which produces all the messages
    POST: function (req, res) {
      // db.sqlInsertMessage('','')
      console.log(res);
      // db.query('INSERT into messages ( username, message ) values ( ' + req.username + ', '+ req.message +' )', function(err, rows, fields){
      //   if(err){
      //     console.log('ERROR!');
      //   }
      // })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    GET: function () {},
    POST: function () {}
  }
};

// module.exports.messages.POST();

// TODO:
// - Write out get and post for the messages and users to db
// - the modules pulls information from the db and also writes to it
