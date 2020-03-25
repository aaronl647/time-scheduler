const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    // availableDates: {
    //     type: mongoose.ObjetId,
    //     default: null
    // },
    // activity: {
    //     type: ObjectId
    // }
})

module.exports = mongoose.model('User', userSchema)