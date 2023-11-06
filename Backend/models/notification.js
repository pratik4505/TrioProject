const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  notifications: [
    {
      title: {
        type: String,
        required: true
      },
      description: String
    }
  ]
},
{
  timestamps: true
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
