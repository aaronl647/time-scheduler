const Time_Date = require('../models/availableDays');
const User = require('../models/user')

module.exports = {
    index,
    new: newSchedule,
    // show,
    // delete: deleteOne,
}

Time_Date.deleteMany(() => {
  console.log('Database Cleared!')
});

function index(req, res) {
    res.render('schedule/date', {title: 'Add available dates'})
}

function newSchedule(req, res) {
    if (req.body.dayOfWeek) req.body.dayOfWeek = req.body.dayOfWeek.split(',');
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const schedule = new Time_Date(req.body)
    schedule.dayOfWeek = req.body.dayOfWeek
    schedule.save()
    console.log(schedule)
    schedule.populate
    res.redirect('/activity')
}
// function show(req, res) {
//     Time_Date.findById(req.params.id, function(err, dates) {
//       res.render('schedule/show', { title: 'Available Dates and Times', dates });
//     });
//   }

// function deleteOne(req,res) {
//     const schedule = new Time_Date(req.params.id)
//     .then(date => date.remove()
//     .then(()=> 
//     console.log(schedule))
//     )}
