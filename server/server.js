const
  express = require('express'),
  session = require('express-session'),
  passport = require('./config/passport'),
  path = require('path'),
  mongoose = require('mongoose')


const User = require('./models/User')

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

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


// Define API routes here

app.post("/api/login", passport.authenticate("local"), function(req, res) {
  res.json(req.user)
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
