const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost:27017/scheduler', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }); 

mongoose.connection.on('connected', function () {
    console.log("HOWDY HO! You've connected to the MongoDB")
})

module.exports = mongoose;