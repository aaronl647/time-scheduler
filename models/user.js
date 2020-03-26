const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    schedule: [{type: mongoose.Schema.Types.ObjectId, ref: 'Availability', default: null}],
    activity: [{type: mongoose.Schema.Types.ObjectId, ref: 'Activity', default: null}]
})

const User = mongoose.model('User', UserSchema);

module.exports = User