var express = require('express');
var router = express.Router();
const activityCtrl = require('../controllers/activity')

router.get('/', activityCtrl.index);

module.exports = router;