const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost:27017/scheduler', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
const db = mongoose.connection

db.on('connected', function () {
    console.log(`HOWDY HO! You've connected to the MongoDB at ${db.host}:${db.port} `)
})