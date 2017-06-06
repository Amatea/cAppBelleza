const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CandidateSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required.']
  },
  lastname: {
    type: String,
    required: [true, 'Lastname is required.']
  },
  birthdate: {
    type: Date,
    required: [true, 'Birthdate is required.' ]
  },
  description: {
    type: String,
    required: [true, 'Description is required.' ]
  },
  studies: {
    type: String,
    required: [true, 'Studies is required.' ]
  }
  facebook: {
    type: Date,
    required: [true, 'Birthdate is required.' ]
  },
  likes: {
    type: Number,
    default: 0
  },
  criteriaScores: [{
    type: Schema.Types.ObjectId,
    ref: 'criteriaScore'
  }]
})

const Candidate = mongoose.model('candidate', CandidateSchema)

module.exports = Candidate
