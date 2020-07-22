const express = require("express"),
  session = require("express-session"),
  cookieParser = require("cookie-parser"),
  bodyParser = require("body-parser"),
  auth = require("./config/auth"),
  path = require("path"),
  mongoose = require("mongoose"),
  multer = require("./config/multer"),
  cors = require("cors"),
  uuidv4 = require("uuidv4"),
  passport = require("passport");

const User = require("./models/User"),
  Event = require("./models/Event"),
  MongoStore = require("connect-mongo")(session),
  Comment = require("./models/Comment");

require("dotenv").config();

const SERVER_PORT = process.env.PORT || process.env.SERVER_PORT;

console.log(process.env.MONGODB_URI);
const app = express();

const returnSuccess = (result, res) => {
  console.log(`Success result: ${result}`);
  res.json({ status: "success", data: result });
};

const returnError = ({ message }, res) => {
  console.error(message);
  res.json({ status: "error", message: message });
};

mongoose.connect(process.env.MONGODB_URI || "mongodb://ofc:Aj6UzX4h4#auFuW@ds131151.mlab.com:31151/heroku_9lf6wtdh", error => {
  if (error) throw error;
  console.log("Successfully connected to MongoDB");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const clientStaticPath = process.env.NODE_ENV === "production" ? __dirname + "/../client/build" : __dirname + "/../client/public";

// Serve up static assets (usually on heroku)
app.use(express.static(clientStaticPath));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define middleware here

app.use(cookieParser());
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    ttl: 24 * 60 * 60,
    cookie: {
      httpOnly: false,
      maxAge: 365 * 24 * 60 * 60 * 1000,
    },
  })
);

app.use(auth.initialize);
app.use(auth.session);
app.use(auth.setUser);

//app.use(cors());

// Define API routes here

app.get("/api/auth", (req, res) => {
  console.log(`Authenticated user: ${req.user}`);
  if (req.user) {
    returnSuccess(true, res);
  } else {
    returnSuccess(false, res);
  }
});

app.post("/api/login", passport.authenticate("local"), function (req, res) {
  console.log("/api/login");
  console.log(req.user);
  returnSuccess(req.user, res);
});

app.post("/api/logout", function (req, res) {
  console.log(req);
  req.logout();
  res.json(true);
});

app.post("/api/register", function (req, res) {
  User.findOne({ username: req.body.username })
    .then(user => {
      if (user) {
        returnError({ message: "User already exists." }, res);
      } else {
        const newUser = new User(req.body);
        newUser
          .save()
          .then(user => returnSuccess(user, res))
          .catch(error => returnError(error, res));
      }
    })
    .catch(error => returnError(error, res));
});

app.get("/api/events", function (req, res) {
  Event.find({})
    .populate("postedBy", "-password -__v")
    .select("-__v")
    .then(resp => returnSuccess(resp, res))
    .catch(error => returnError(error, res));
});

app.get("/api/event/:id", function (req, res) {
  const eventId = req.params.id;

  Event.findOne({ _id: new mongoose.Types.ObjectId(eventId) })
    .select("-__v")
    .populate("postedBy", "-password -__v")
    .populate({
      path: "comments",
      select: "-forEvent -__v",
      populate: { path: "postedBy", select: "-password -__v" },
    })
    .then(result => returnSuccess(result, res))
    .catch(error => returnError(error, res));
});

/* Multer Did not Quick do the trick this time

const DIR = "./public/";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, uuidv4() + "-" + fileName);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});


app.post("/api/event", upload.single("imageUrl"), function (req, res, next) {
  console.log(req);
  const url = req.protocol + "://" + req.get("host");
  const newEvent = new Event({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    description: req.body.title,
    imageUrl: url + "/public/" + req.file,
    when: req.body.when,
    location: req.body.location,
    postedDate: req.body.postedDate,
    postedBy: req.body.postedBy,
    comments: req.body.comments,
  });
  newEvent
    .save()
    .then(event => returnSuccess(event, res))
    .catch(error => returnError(error, res));
});
*/
app.post("/api/event", function(req, res) {
  const newEvent = new Event(req.body)
  newEvent.save()
    .then(event => returnSuccess(event, res))
    .catch(error => returnError(error, res))
})

app.delete("/api/event/:id", function (req, res) {
  const eventId = req.params.id;

  Comment.deleteMany({ forEvent: new mongoose.Types.ObjectId(eventId) })
    .then(comments => {
      Event.deleteOne({ _id: new mongoose.Types.ObjectId(eventId) })
        .then(event => returnSuccess(event, res))
        .catch(error => returnError(error, res));
      console.log(comments);
    })
    .catch(error => returnError(error, res));
});

app.post("/api/comment", function (req, res) {
  const newComment = new Comment(req.body);
  newComment
    .save()
    .then(comment => {
      const eventId = new mongoose.Types.ObjectId(comment.forEvent);
      Event.findOneAndUpdate({ _id: eventId }, { $push: { comments: comment._id } })
        .then(event => returnSuccess(comment, res))
        .catch(error => returnError(error, res));
    })
    .catch(error => returnError(error, res));
});

app.post("/api/flag/:eventId", function (req, res) {
  const eventId = new mongoose.Types.ObjectId(req.params.eventId);
  Event.findOneAndUpdate({ _id: eventId }, { $inc: { flagCount: 1 } })
    .then(event => returnSuccess(event.flagCount + 1, res))
    .catch(error => returnError(error, res));
});

app.delete("/api/comment/:id", function (req, res) {
  const commentId = req.params.id;

  Comment.findOneAndDelete({ _id: new mongoose.Types.ObjectId(commentId) })
    .then(comment => {
      Event.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(comment.forEvent) }, { $pull: { comments: commentId } })
        .then(event => returnSuccess(comment, res))
        .catch(error => returnError(error, res));
    })
    .catch(error => returnError(error, res));
});

// Send every other request to the React app

app.get("*", (req, res) => {
  res.sendFile(path.join(clientStaticPath, "index.html"));
});

// Define any API routes before this runs

app.listen(SERVER_PORT, () => {
  console.log(`Server is up on port ${SERVER_PORT}!`);
});
