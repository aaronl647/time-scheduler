var express = require('express');
var router = express.Router();
const indexCtrl = require('../controllers/index');

// /* GET home page. */
router.get('/', indexCtrl.index);
router.post('/', indexCtrl.new);
// router.get('/:id', indexCtrl.show);

module.exports = router;
