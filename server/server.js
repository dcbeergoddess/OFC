const
  express = require('express'),
  session = require('express-session'),
  passport = require('./config/passport'),
  path = require('path'),
  mongoose = require('mongoose')


const
  User = require('./models/User'),
  Event = require('./models/Event'),
  Comment = require('./models/Comment')

require('dotenv').config()

const SERVER_PORT = process.env.PORT || process.env.SERVER_PORT;

console.log(process.env.MONGODB_URI)
const app = express();

mongoose.connect(
  process.env.MONGODB_URI || '<to-do: public-uri>',
  (error) => {
    if (error) throw error
    console.log('Successfully connected to MongoDB')
  }
)


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

console.log(__dirname)

const clientStaticPath = process.env.NODE_ENV === 'production' ?
  __dirname + '/../client/build' :
  __dirname + '/../client/public'

// Serve up static assets (usually on heroku)
app.use(express.static(clientStaticPath))

// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());


// Define API routes here

app.post("/api/login", function(req, res) {

  User.findOne({username: req.body.username}, function(err, user) {
    if (err) console.error(err)

    const logonFailed = {status: "error", message: "Invalid username or password."}

    if (!user) {
      console.log("User not found.")
      res.json(logonFailed)
    } else {

      console.log(user)

      if (user.comparePassword(req.body.password)) {
        console.log("Password matched!")
        res.json({status: "success", data: {
          username: user.username,
          _id: user._id
        }})
      } else {
        console.log("Password did not match.")
        res.json(logonFailed)
      }
    }
  })
})


app.post("/api/register", function(req, res) {

  User.findOne({username: req.body.username}, function(err, user) {
    if (err) console.error(err)

    const logonFailed = {status: "error", message: "User already exists."}

    if (user) {
      console.log("User already exists.")
      res.json(logonFailed)
    } else {
      const newUser = new User(req.body)
      newUser.save(function (err, user) {
        if (err) return console.error(err);

        console.log(user.username + " added!")
        res.json({status: "success", data: user})
      })
    }
  })
})

app.get("/api/events", function(req, res) {
  Event.find({})
    .populate('postedBy', '-password -__v')
    .then(resp => {
      res.json({status: "succss", data: resp})
    })
    .catch(error => {
      req.json({status: "error", message: "No events found."})
    })
})

app.get("/api/event/:id", function(req, res) {
  const _id = req.params.id

  Event.findOne({_id: new mongoose.Types.ObjectId(_id)})
    .populate("postedBy", '-password -__v')
    .populate("comments", '-__v')
    .then(result => {
      res.json({status: "success", data: result})
    })
    .catch(error => {
      res.json({status: "error", message: error.message})
    })

})

app.post("/api/event", function(req, res) {
  const newEvent = new Event(req.body)
  newEvent.save(function (err, event) {
    if (err) return console.error(err);

    console.log(event.title + " added!");
    res.json({status: "success", data: event})
  })
})

app.post("/api/comment", function(req, res) {
  const newComment = new Comment(req.body)
  newComment.save()
    .then(comment => {
      const eventId = new mongoose.Types.ObjectId(comment.forEvent)
      Event.findOneAndUpdate(
        { _id: eventId },
        { $push: { comments: comment._id } }
      )
      .then(event =>{
        console.log("Comment added!")
        res.json({status: "success", data: comment})
      })
      .catch(error => {
        res.json({status: "error", message: error.message})
      })
  })
  .catch(error => {
    res.json({status: "error", message: error.message})
  })

})

// Send every other request to the React app

app.get('*', (req, res) => {
  if (!req.user) {

  } else {
    res.sendFile(path.join(clientStaticPath, 'index.html'))
  }
})

// Define any API routes before this runs

app.listen(SERVER_PORT, () => {
  console.log(`Server is up on port ${SERVER_PORT}!`)
})
