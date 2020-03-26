const Time_Date = require('../models/availableDays');
// const userData = require('../seeds')

module.exports = {
    index,
    new: newSchedule,
    // create
}

function index(req, res) {
    res.render('schedule/date', {title: 'Add available dates'})
}

function newSchedule(req, res) {
    console.log('hello')
    const schedule = new Time_Date()
    schedule.dayOfWeek = req.body.dayOfWeek
    schedule.save()
    console.log(schedule)
    res.send('Dates have been saved')
}

  // split if it's not an empty string
//   if (req.body.cast) req.body.cast = req.body.cast.split(',');
//   for (let key in req.body) {
//     if (req.body[key] === '') delete req.body[key];
//   }
  
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