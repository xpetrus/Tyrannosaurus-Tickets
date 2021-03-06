const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
  username: {
    type: String,
    required: true,
    unique: true 
  },
  user_real_name: {
    type: String,
    required: true,
    unique: true 
  },
  password_digest: { type: String, required: true },
  ticket_IDs: [{
    ticket_ID: {
      type: Schema.Types.ObjectId,
      ref: 'tickets'
    },
    user_ID: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    }
  }]
},
{
  timestamps: true
})

module.exports = mongoose.model("users", User)