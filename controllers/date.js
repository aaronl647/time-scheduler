const Dates = require('../models/availableDays');
const userData = require('../seeds')

module.exports ={
    newSchedule,
    // create
}

function newSchedule(req, res) {
    res.render('schedule/date');
    Dates.create(req.body)
    .then(() => {
        
    })
    
  
}


// function create(req, res) {
//     //res.render('schedule/date')
// }