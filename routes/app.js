var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users')

/* GET users listing. */
router.post('/', usersCtrl.home);

module.exports = router;