var express = require('express');
var router = express.Router();
const appCtrl = require('../controllers/users')

/* GET users listing. */
router.get('/', appCtrl.index);

module.exports = router;
