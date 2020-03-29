const User = require('../models/user');

module.exports = {
    index,
    new: newUser,
    show
}

User.deleteMany(() => {
  console.log('Database Cleared!')
});

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
    res.redirect('date')
}

function show(req, res) {
    res.render('users/new', { title:  'What do you want to do?'});
}
