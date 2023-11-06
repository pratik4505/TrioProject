const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    content: {
      type: String,
      required: true
    },
    replies: [
      {
        replyBy: {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
        replyTo: {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
        content: {
          type: String,
          required: true,
        }
      }
    ]
  });
  
  const Comment = mongoose.model('Comment', commentSchema);
  