const Activity = require('../models/activity')

module.exports = {
    index
}

function index(req, res) {
    res.render('activity/description', {title: "What activities would you like to do?"})
}