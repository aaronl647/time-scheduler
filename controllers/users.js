const User = require('../models/user');
const userData = require('../seeds')

module.exports ={
    index,
    new: newSchedule
}

function index(req, res) {
    User.create(userData)
    .then(users => {
        console.log(users)
        res.render('schedule/users')
    })   
}

function newSchedule(req, res){
    res.render('schedule/new')
}