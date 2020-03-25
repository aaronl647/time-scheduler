var express = require('express');
var router = express.Router();
const dateCtrl = require('../controllers/date')

router.get('/new', dateCtrl.newSchedule)
// router.post('/new', dateCtrl.create)

module.exports = router;