const Activity = require('../models/activity')
const User = require('../models/user')
module.exports = {
    index,
    new: newActivity
}

Activity.deleteMany(() => {
  console.log('Database Cleared!')
});

function index(req, res) {
    res.render('activity/description', {title: "What activities would you like to do?"})
}

function newActivity(req, res) {
    if (req.body.description) req.body.description = req.body.description.split(',');
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const activity = new Activity(req.body)
    activity.description = req.body.description
    activity.save()
    console.log(activity)
    res.redirect()
}