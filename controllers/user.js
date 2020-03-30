const User = require('../models/user')
const Avail = require('../models/availableDays')
const Activity = require('../models/activity')

module.exports = {
    index,
    newUser,
    showUser,
    showPlan,
    newPlan,
    newActivity,
    editUser,
    editSchedule
}

function index(req, res){
    res.render('index')
}

function newUser(req, res){
    console.log("hello")
    User.create(req.body)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(err => {
        if(err) {
            console.log('create error: ' + err);
        }
        res.sendStatus(500)
    })
}

function showUser(req, res){
    User.findById(req.params.id)
    .then(result => {
        res.json(result);
    })
}

function showPlan(req, res){
    User.find({name:req.params.id})
    //   .populate('scheduleId') 
    //   .populate('activityId')
      .exec((err, user)=> {
        if (err) {
        console.log("index error:" + err);
        res.sendStatus(500);
    }
        res.json(user);
    });
}

function newPlan(req, res){
    console.log("hello")
    Avail.create(req.body)
    .then(sched => {
        res.status(200).json(sched)
    })
    .catch(err => {
        if(err) {
            console.log('create error: ' + err);
        }
        res.sendStatus(500)
    })
}

function newActivity(req, res){
    console.log("hello")
    Activity.create(req.body)
    .then(activ => {
        res.status(200).json(activ)
    })
    .catch(err => {
        if(err) {
            console.log('create error: ' + err);
        }
        res.sendStatus(500)
    })
}

function editUser(req,res) {
    User.findByIdAndUpdate(req.params.id, req.body)
    .then(user => {
        res.status(200).json(user);
    })
    .catch(err => {
        if (err) {
        console.log("update error: " + err);
      }
        res.sendStatus(500)
    });
  }; 

  function editSchedule(req,res) {
    Avail.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(sched => {
        res.status(200).json(sched);
    })
    .catch(err => {
        if (err) {
        console.log("update error: " + err);
      }
        res.sendStatus(500)
    });
  }; 



       
      