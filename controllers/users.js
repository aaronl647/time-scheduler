const User = require('../models/user');
const userData = require('../seeds')

module.exports ={
    home,
}

function home(req, res) {
    User.create(userData)
    .then(users => {
        console.log(users)
        console.log("YEET")
        res.render('index', { title: 'Time Scheduler App' });
})   
}
