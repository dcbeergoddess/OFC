const
  mongoose = require('mongoose')

const
  Schema = mongoose.Schema,
  schemaOptions = { toJSON: { virtuals: true } }

const EventSchema = new Schema({
  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  imageUrl: {
    type: String,
    required: true
  },

  when: {
    type: Date,
    required: true
  },

  location: {
    type: String,
    required: true
  },

  flagCount: {
    type: Number,
    default: 0
  },

  postedDate: {
    type: Date,
    default: Date.now
  },

  postedBy: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },

  comments: [{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }]
}, schemaOptions)

EventSchema.virtual('commentCount').get(function() {
  return this.comments ? this.comments.length : 0
})

module.exports = mongoose.model('Event', EventSchema)