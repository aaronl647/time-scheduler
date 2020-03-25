const db = require('./models')

const userAaron = {
        name: "Aaron",
        email: "aaron.l@live.ca"
    }

db.User.deleteMany({}, (err, users) =>{
    console.log('removed all users');
    db.User.create(userAaron,(err, users)=> {
        if(err) {
            console.log(err);
            return;
        }
        console.log('recreated all authors');
        console.log(`created ${users.length} users`)
    })
})