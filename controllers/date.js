const Dates = require('../models/availableDays');
const userData = require('../seeds')

module.exports = {
    newSchedule,
    // create
}

function newSchedule(req, res) {
    res.render('schedule/date', { title: 'Please enter your available dates' });
  }

// function newSchedule(req, res) {
//     res.render('schedule/date');
//     const availableday = new Dates(req.body)
//     availableday.save(function (err) {})
// }






// .then(day => {
//     console.log(day)
// })

// function create(req, res) {
//     //res.render('schedule/date')
// }