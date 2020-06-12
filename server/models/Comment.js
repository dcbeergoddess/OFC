const
  mongoose = require('mongoose')

const
  Schema = mongoose.Schema


const CommentSchema = new Schema({
  comment: {
    type: String,
    required: true,
  },

  postedDate: {
    type: Date,
    default: Date.now
  },

  forEvent:  {
    type: Schema.Types.ObjectId,
    ref: "Event"
  },

  postedBy: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
})

module.exports = mongoose.model('Comment', CommentSchema)