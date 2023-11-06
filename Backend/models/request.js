const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const requestSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['message', 'connect'], // Ensure 'type' is one of these values
    required: true
  },
  fromUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model (replace with your actual user model name)
    required: true
  },
  toUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model (replace with your actual user model name)
    required: true
  }
},
{
  timestamps: true
});

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;

