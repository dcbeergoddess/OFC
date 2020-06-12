const
  mongoose = require('mongoose')

const
  Schema = mongoose.Schema


const EventSchema = new Schema({
  title: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },

  description: {
    type: String,
    required: true
  },

  imageUrl: {
    type: String,
    required: true
  },

  dateTime: {
    type: Date,
    required: true
  },

  location: {
    type: String,
    required: true
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
})

EventSchema.virtual('commentCount').get(function() {  
  return this.comments.length
})

module.exports = mongoose.model('Event', EventSchema)