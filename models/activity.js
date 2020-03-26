const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
    description:{
        type: [String],
        required: true
    }
})

const Activity = mongoose.model('Activity', ActivitySchema);

module.exports = Activity;