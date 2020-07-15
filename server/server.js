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


const returnSuccess = (result, res) => {
  console.log(result)
  res.json({status: "success", data: result})
}

const returnError = ({message}, res) => {
  console.error(message)
  res.json({status: "error", message: message})
}

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://ofc:Aj6UzX4h4#auFuW@ds131151.mlab.com:31151/heroku_9lf6wtdh',
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

  User.findOne({username: req.body.username})
    .then(user => {
      const logonFailed = () =>
        returnError({message: "Invalid username or password."}, res)

      if (!user) {
        logonFailed()
      } else if (!user.comparePassword(req.body.password)) {
        logonFailed()
      } else {
        returnSuccess({
          username: user.username,
          _id: user._id
        }, res)
      }
    })
    .catch(error => returnError(error, res))
})


app.post("/api/register", function(req, res) {

  User.findOne({username: req.body.username})
    .then(user => {
      if (user) {
        returnError({message: "User already exists."}, res)
      } else {
        const newUser = new User(req.body)
        newUser.save()
          .then(user => returnSuccess(user, res))
          .catch(error => returnError(error, res))
      }
    })
    .catch(error => returnError(error, res))
})

app.get("/api/events", function(req, res) {
  Event.find({})
    .populate('postedBy', '-password -__v')
    .select('-__v')
    .then(resp => returnSuccess(resp, res))
    .catch(error => returnError(error, res))
})

app.get("/api/event/:id", function(req, res) {
  const eventId = req.params.id

  Event.findOne({_id: new mongoose.Types.ObjectId(eventId)})
    .select('-__v')
    .populate('postedBy', '-password -__v')
    .populate({
      path: 'comments',
      select: '-forEvent -__v',
      populate: { path: 'postedBy', select: '-password -__v' }
    })
    .then(result => returnSuccess(result, res))
    .catch(error => returnError(error, res))
})

app.post("/api/event", function(req, res) {
  const newEvent = new Event(req.body)
  newEvent.save()
    .then(event => returnSuccess(event, res))
    .catch(error => returnError(error, res))
})

app.delete("/api/event/:id", function(req, res) {
  const eventId = req.params.id

  Comment.deleteMany({forEvent: new mongoose.Types.ObjectId(eventId)})
    .then(comments => {
      Event.deleteOne({_id: new mongoose.Types.ObjectId(eventId)})
        .then(event => returnSuccess(event, res))
        .catch(error => returnError(error, res))
      console.log(comments)
    })
    .catch(error => returnError(error, res))
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
      .then(event => returnSuccess(comment, res))
      .catch(error => returnError(error, res))
    })
    .catch(error => returnError(error, res))
})

app.delete("/api/comment/:id", function(req, res) {
  const commentId = req.params.id

  Comment.findOneAndDelete({_id: new mongoose.Types.ObjectId(commentId)})
    .then(comment => {
      Event.findOneAndUpdate(
        { _id: new mongoose.Types.ObjectId(comment.forEvent) },
        { $pull: { comments: commentId } })
        .then(event => returnSuccess(comment, res))
        .catch(error => returnError(error, res))
    })
    .catch(error => returnError(error,res))
})

// Send every other request to the React app

app.get('*', (req, res) => {
    res.sendFile(path.join(clientStaticPath, 'index.html'))
})

// Define any API routes before this runs

app.listen(SERVER_PORT, () => {
  console.log(`Server is up on port ${SERVER_PORT}!`)
})
