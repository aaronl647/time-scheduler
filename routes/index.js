var express = require('express');
var router = express.Router();
const userCtrl = require('../controllers/users')
const dateCtrl = require('../controllers/date')


/* GET home page. */
router.get('/', userCtrl.home)

module.exports = router;



// function(req, res, next) {
//   res.render('index', { title: 'Time Scheduler App' });
// }