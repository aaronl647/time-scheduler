const mongoose = require('mongoose');

require('./config/database');

const UserModel = require('./models/user');
const Date_Time = require('./models/availableDays');
const Activity = require('./models/activity');

UserModel.deleteMany({}, (err, user) => {
    console.log('Removed all users!');

    const userData = [{
            name: "Aaron",
            email: "aaron.l@live.ca"
        },
        {
            name: "Kaitlin",
            email: "kaitlinl99@gmail.com"

        },
        {
            name: "Eric",
            email: "eric.potocean@gmail.com"
        }
    ]

    UserModel.create(userData, function (err, users) {
        console.log('Created users!');
        console.log(users);
    });
});

Date_Time.deleteMany({}, (err, sched) => {
    console.log('removed all schedules');

    const scheduleData = [{
            dayOfWeek: ["Monday", "Wednesday", "Friday"],
            time: ["Afternoon", "Night", "Morning"]
        },
        {
            dayOfWeek: ["Monday", "Wednesday", "Friday"],
            time: ["Afternoon", "Night", "Night"]
        },
        {
            dayOfWeek: ["Monday", "Wednesday", "Friday"],
            time: ["Evening", "Night", "Night"]
        }
    ]

    Date_Time.create(scheduleData, (err, sched) => {
        console.log('Created Schedules!');
        console.log(sched);
    });
})


Activity.deleteMany({}, (err, activity) => {
    console.log('removed all activities');

    const activityData = [
        {
            description: ["Lunch", "Dinner", "Breakfast"]
        },
        {
            description: ["Lunch", "Gaming", "Dinner"]
        },
        {
            description: ["Dinner", "Dinner", "Dinner"]
        }
    ]

    Activity.create(activityData, (err, activ) => {
        console.log('Created activities!');
        console.log(activ);
    });
})