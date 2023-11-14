const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['user', 'company'],
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  companyId: {
    type: Schema.Types.ObjectId,
    ref: 'Company'
  },
  likedBy: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  imageUrl: {
    type: String
  },
  videoUrl: {
    type: String
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ]
},
{
  timestamps: true,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
