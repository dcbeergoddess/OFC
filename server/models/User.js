const
  mongoose = require('mongoose'),
  bcrypt = require('bcryptjs')

const
  Schema = mongoose.Schema,
  SALT_WORK_FACTOR = 10


const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },

  password: {
    type: String,
    required: true
  }
})

UserSchema.pre('save', function(next) {
  const user = this

  if (!user.isModified('password')) return next()

  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err)

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err)

      user.password = hash
      next()
    })
  })
})

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  return bcrypt.compareSync(candidatePassword, this.password)
}


module.exports = mongoose.model('User', UserSchema)