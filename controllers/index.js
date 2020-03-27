const User = require('../models/user');

module.exports = {
    index,
    new: newUser,
    show
}

function index(req, res) {
    console.log("hi")
    res.render('index', {
        title: 'Time Scheduler App'
    });
}

function newUser(req, res) {
    const newRecord = new User(req.body)
    newRecord.name 
    newRecord.email
    newRecord.save()
    console.log(newRecord)
    res.redirect(`/${newRecord._id}`)
}

function show(req, res) {
    User.findById(req.params.id, function(err, user) {
      res.render('users/new', { title:  'What do you want to do?', user });
    });
  }
