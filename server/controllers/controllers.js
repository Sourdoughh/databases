var models = require('../models/model');
var bluebird = require('bluebird');
var cors = require('cors');


module.exports = {
  messages: {
    get: function (req, res) {
      res.writeHead(200, cors.headers);
      console.log('GET WORKS');
      // console.log('REQ: ', req, ' RES: ', res);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.POST(req.body.username, req.body.text)
      console.log(req.body.username + ' ' + req.body.text);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};
























      // res.writeHead(200, cors.headers);
      // var body = "";
      // req.on('data', function(data){
      //   body = body + data;
      // });
      // console.log('PORQUEEEE');
      // res.end();
