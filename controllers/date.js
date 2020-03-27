const Time_Date = require('../models/availableDays');
// const userData = require('../seeds')

module.exports = {
    index,
    new: newSchedule,
    show,
    delete: deleteOne,
    // create
}

function index(req, res) {
    res.render('schedule/date', {title: 'Add available dates'})
}

function newSchedule(req, res) {
    console.log('hello')
    // schedule.dayOfWeek = req.body.dayOfWeek
    if (req.body.dayOfWeek) req.body.dayOfWeek = req.body.dayOfWeek.split(',');
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const schedule = new Time_Date(req.body)
    schedule.dayOfWeek = req.body.dayOfWeek
    schedule.save()
    console.log(schedule)
    res.redirect(`date/${schedule._id}`)
}
function show(req, res) {
    Time_Date.findById(req.params.id, function(err, dates) {
      res.render('schedule/show', { title: 'Available Dates and Times', dates });
    });
  }

function deleteOne(req,res) {
    const schedule = new Time_Date(req.params.id)
    .then(date => date.remove()
    .then(()=> 
    console.log(schedule))
    )}

  
//   const movie = new Movie(req.body);
//   movie.save(function(err) {
//     // one way to handle errors
//     if (err) return res.redirect('/movies/new');
//     console.log(movie);

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