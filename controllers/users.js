const User = require('../models/user');

module.exports ={
    index
}

function index(req, res) {
    Puppy.find(req.params.id).then(function() {
      console.log('hello')
    });
  }