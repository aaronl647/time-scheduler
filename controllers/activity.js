const Activity = require('../models/activity')
const User = require('../models/user')
const Time_Date = require('../models/availableDays')

module.exports = {
    index,
    new: newActivity,
    // show

}

function index(req, res) {
    Activity.findOne({_id:Activity._id})
.populate('activityId')
.exec(function(err, activity){
    res.json(activity)
})
}

function newActivity(req, res) {
    if (req.body.description) req.body.description = req.body.description.split(',');
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const activity = new Activity(req.body)
    activity.description = req.body.description
    // .populate('de')
    activity.save()
    console.log(activity)
    res.redirect(`activity/new`)
}

//  const activity =  Activity.create([
//      {_id: _id}
//     ]);
//  await User.create({
//      activity: activity._id
//  })


// function show(req, res) {
//     Activity.find({_id: _id})
//         .populate('activity')
//         .exec(function(err, act){
//             console.log(act)
//             res.send('Updated User object!')
//         })
//     }
