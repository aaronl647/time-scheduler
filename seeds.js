const db = require('./models')


const user_name = [{
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

const time_date = [{
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

const activity = [
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