const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActivitySchema = new mongoose.Schema({
    description: String
})

const Activity = mongoose.model('Activity', ActivitySchema);

module.exports = Activity