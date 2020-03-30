
var express = require('express');
var router = express.Router();
var userCtrl = require('../../controllers/user');

router.get('/', userCtrl.index) // home page 
router.post('/', userCtrl.newUser) // Create a new user
router.get('/:id', userCtrl.showUser) // Show a user
router.put('/edit/:id', userCtrl.editUser) // Update user 
router.put('/plan/edit/:id', userCtrl.editSchedule) // show ongoing plans
router.get('/plan/:id', userCtrl.showPlan) // show ongoing plans
router.post('/plan/newplan', userCtrl.newPlan) // Create a new Schedule
router.post('/plan/newplan/activity', userCtrl.newActivity) // Create a new Activity

module.exports = router;
