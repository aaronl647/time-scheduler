const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const daySchema = new mongoose.Schema({
    dayOfWeek: {
        type: [String],
        required: true
    },
    time: {
        type: [String],
        default: true
    }
})

const Availbility = mongoose.model('Availbility', daySchema)

module.exports = Availbility