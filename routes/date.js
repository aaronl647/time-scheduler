var express = require('express');
var router = express.Router();
const dateCtrl = require('../controllers/date')

router.get('/', dateCtrl.index)
router.post('/', dateCtrl.new)

module.exports = router;