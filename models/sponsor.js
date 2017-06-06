const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SponsorSchema = new Schema({
  brand: {
    type: String,
    required: [true, 'Name is required.']
  },
  url: {
    type: String,
    match: /^http:\/\//i
  },
  photo: {
    type: String,
    match: /^http:\/\//i,
    required: [true, 'Photo is required.' ]
  },
  description: {
    type: String
  }
})

const Sponsor = mongoose.model('sponsor', SponsorSchema)

module.exports = Sponsor
