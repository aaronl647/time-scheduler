var express = require('express');
var router = express.Router();
const activityCtrl = require('../controllers/activity')

router.get('/', (req, res) => {
    res.render('activity/description')
})
router.post('/', (req,res) =>{
    res.render('activity/description')
});
// router.get('/new', activityCtrl.show);

module.exports = router;