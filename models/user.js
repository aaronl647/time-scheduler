const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    scheduleId: [{type: Schema.Types.ObjectId, ref: 'Availability'}],
    activityId: [{type: Schema.Types.ObjectId, ref: 'Activity'}]
})


const User = mongoose.model('User', UserSchema);

module.exports = User

// {type: mongoose.Schema.Types.ObjectId, ref: 'Availability'}
// {type: mongoose.Schema.Types.ObjectId, ref: 'Activity'}