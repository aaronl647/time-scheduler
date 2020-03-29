var express = require('express');
var router = express.Router();
// const dateCtrl = require('../controllers/date')
const Date_Time = require('../models/availableDays')

// router.get('/', dateCtrl.index);
// router.post('/', dateCtrl.new);
// router.get('/new', dateCtrl.show);
// router.get('new/:id', dateCtrl.put)
// router.delete('/:id', dateCtrl.delete);

router.get('/', (req,res) => {
    res.render('schedule/date')
})

router.post('/', (req, res) => {
    const newDateTime = new Date_Time ({
        dayOfWeek: req.body.dayOfWeek,
        time: req.body.time
    })
    newDateTime.save()
    console.log(newDateTime)
    res.json(newDateTime)
})



module.exports = router;