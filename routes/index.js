var express = require('express');
var router = express.Router();
const appCtrl = require('../controllers/users')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Time Scheduler App' });
});
router.post('/', function(req, res) {
  res.render('index', appCtrl.index)
})

module.exports = router;
