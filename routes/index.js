var express = require('express');
var router = express.Router();
const indexCtrl = require('../controllers/index');

router.get('/', indexCtrl.index);
router.post('/', indexCtrl.new);
// router.get('/:id', indexCtrl.show);
router.get('/new', indexCtrl.show)
module.exports = router;
