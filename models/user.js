const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username is required.']
  },
  password: {
    type: String,
    required: [true, 'Password is required.']
  },
  fullName: String,
  role: {
    type: String,
    enum: [ 'ADMIN', 'JUDGE' ],
    default: 'JUDGE'
  }
})

const User = mongoose.model('user', UserSchema)

module.exports = User
