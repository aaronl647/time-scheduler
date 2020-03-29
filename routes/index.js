var express = require('express');
var router = express.Router();
// const indexCtrl = require('../controllers/index');
const User = require('../models/user');
// const Activity = require('../models/activity');
// const Date_Time = require('../models/availableDays')

router.get('/', (req, res) => {
    res.render('index')
})

router.post('/', (req, res) => {
    const newUser = new User ({
        name: req.body.name,
        email: req.body.email
    })
    console.log(newUser)
    res.json(newUser)
})


// router.get('/:id', indexCtrl.show);
// router.get('/new', indexCtrl.show)
module.exports = router;
