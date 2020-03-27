var express = require('express');
var router = express.Router();
const dateCtrl = require('../controllers/date')

router.get('/', dateCtrl.index)
router.post('/', dateCtrl.new)
router.get('/:id', dateCtrl.show)
router.delete('/:id', dateCtrl.delete)
module.exports = router;