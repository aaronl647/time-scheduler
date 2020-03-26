const User = require('../models/user');
const userData = require('../seeds')

module.exports = {
    index,
    // show,
    // new: newUser,
    create
}

function index(req, res) {
    console.log("YEET")
    res.render('index', {
        title: 'Time Scheduler App'
    });
}

function create(req, res) {
    const createUser = new User(req.body);
    createUser.save()
        .then(item => {
            res.send('You have successfully signed up!')
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        })
}


// User.create(userData)
// .then(users => {
//     console.log(users)

// function create(req, res) {
//     // convert nowShowing's checkbox of nothing or "on" to boolean
//     req.body.nowShowing = !!req.body.nowShowing;
//     // remove whitespace next to commas
//     req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
//     // split if it's not an empty string
//     if (req.body.cast) req.body.cast = req.body.cast.split(',');
//     for (let key in req.body) {
//       if (req.body[key] === '') delete req.body[key];
//     }

//     const movie = new Movie(req.body);
//     movie.save(function(err) {
//       // one way to handle errors
//       if (err) return res.redirect('/movies/new');
//       console.log(movie);
//       // for now, redirect right back to new.ejs
//       res.redirect('/movies');
//     });
//   }