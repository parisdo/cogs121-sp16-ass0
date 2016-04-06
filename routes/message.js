var models = require('../model');
var mongoose = require('mongoose');

exports.send = function(req, res) {
    console.log(req.body); // help you see what is inside of req.body
    // your solution here

    var newMessage = new models.Message({
      "email": req.body.email,
      "content": req.body.content,
      "created": Date.now()
    });

    newMessage.save(afterSaving);

    function afterSaving(err) { // this is a callback
      if(err) {console.log(err); res.send(500); }
      res.redirect('/'); // redirect to home
    }
};
