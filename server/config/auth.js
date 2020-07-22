const
  passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy,
  User = require('../models/User')



  const returnSuccess = (result, done) => {
    console.log(result)
    done(null, {status: "success", data: result})
  }
  
  const returnError = ({message}, done) => {
    console.error(message)
    done(null, false, {status: "error", message: message})
  }
  

passport.use(new LocalStrategy(
  {
    usernameField: 'username'
  },
  function(username, password, done) {

    User.findOne({username: username})
    .then(user => {
      const logonFailed = () =>
        done(null, false, {message: 'Invalid username or password'})
        // returnError({message: "Invalid username or password."}, done)

      if (!user) {
        console.log('user not found')
        logonFailed()
      } else if (!user.comparePassword(password)) {
        console.log('invalid password')
        logonFailed()
      } else {
        console.log('logon successful')
        // returnSuccess(user, done)
        return done(null, {
          username: user.username,
          _id: user._id
        })
      }
    })
    .catch(error => done(false, error))

    // // When a user tries to sign in this code runs
    // User.findOne({
    //   where: {
    //     username: username
    //   }
    // }).then(function(dbUser) {
    //   // If there's no user with the given email
    //   if (!dbUser) {
    //     return done(null, false, {
    //       message: "Incorrect username."
    //     });
    //   }
    //   // If there is a user with the given email, but the password the user gives us is incorrect
    //   else if (!dbUser.validPassword(password)) {
    //     return done(null, false, {
    //       message: "Incorrect password."
    //     });
    //   }
    //   // If none of the above, return the user
    //   return done(null, dbUser);
    // });
  }
));


// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser((user, done) => {
  console.log(`Serialized user ID: ${user._id}`)
  return done(null, user._id)
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id).exec();
    return done(null, user);
  }
  catch (err) {
    return done(err);
  }
});


module.exports = {
  initialize: passport.initialize(),
  session: passport.session(),
  setUser: (req, res, next) => {
    res.locals.user = req.user
    console.log(res.locals.user)
    return next()
  },
};
