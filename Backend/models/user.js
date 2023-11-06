const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    
  },
  notifications: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Notification'
  }],
  summary: String,
  industry: String,
  about: String,
  location: String,
  likedPosts: [
    {
      likeType: {
        type: String,
        enum: ['thumbsup', 'congo', 'mindblowing', 'heart'],
      },
      postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
      },
    },
  ],
  connections: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  companyFollows: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company'
  }],
  requests: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Request'
  }],
  imageUrl: {
    type: String,
    
  },
  phoneNo: String,
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }],
  messageOnly: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  experience: {
    title: String,
    description: String,
    startDate: Date,
    endDate: Date
  },
  education: {
    place: String,
    startDate: Date,
    endDate: Date
  },
  skills: [{
    skill: String,
    endorses: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }]
  }]
});

module.exports = mongoose.model('User', userSchema);
