

const
  express = require("express"),
  path = require("path"),
  mongoose = require('mongoose')


const User = require('./models/User')

require('dotenv').config()

const PORT = process.env.PORT || 3001;

console.log(process.env.MONGODB_URI)
const app = express();

mongoose.connect(
  process.env.MONGODB_URI || '<to-do: public-uri>',
  (error) => {
    if (error) throw error
    console.log('Successfully connected to MongoDB')
  }
)

const test = new User({
  username: 'alice',
  password: 'Password123'
})

test.save(error => console.error(error))

const test2 = new User({
  username: 'bob',
  password: 'Password123'
})

test2.save(error => console.error(error))


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));
}
// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs