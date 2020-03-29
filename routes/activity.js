var express = require('express');
var router = express.Router();
// const activityCtrl = require('../controllers/activity')
const Activity = require('../models/activity')

router.get('/', (req, res) => {
    res.render('activity/description')
})
router.post('/', (req,res) =>{
    const newActivity = new Activity ({
        description: req.body.description
    })
    newActivity.save()
    console.log(newActivity)
    res.json(newActivity)
});

// router.get('/new', activityCtrl.show);

module.exports = router;