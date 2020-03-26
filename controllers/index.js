// const User = require('../models/index');

// module.exports = {
//     index,
//     new: newUser
// }

// function index(req, res) {
//     console.log("hi")
//     res.render('index', {
//         title: 'Time Scheduler App'
//     });
// }

// function newUser(req, res) {
//     const newRecord = new User()
//         newRecord.name = req.body.name,
//         newRecord.email = req.body.email
//     newRecord.save()
//     console.log(newRecord)
//     res.render('/')
// }