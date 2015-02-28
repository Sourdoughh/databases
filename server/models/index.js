var db = require('../db');




module.exports = {
  messages: {
    get: function (req, res) {
      //req is some data but it'll need to be formatted
      // db.query('SELECT * FROM messages', function(err, rows, fields){
      //   if(err){
      //     console.log('ERROR!');
      //   }
        //use req to get data

      // })

    }, // a function which produces all the messages
    post: function (req, res) {
      // db.query('INSERT into messages ( username, message ) values ( ' + req.username + ', '+ req.message +' )', function(err, rows, fields){
      //   if(err){
      //     console.log('ERROR!');
      //   }
      // })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

// TODO:
// - Write out get and post for the messages and users to db
// - the modules pulls information from the db and also writes to it
