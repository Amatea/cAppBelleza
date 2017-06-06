const mongoose = require('mongoose')
const CriteriaSchema = require('./criteria')
const Schema = mongoose.Schema

const CriteriaScoreSchema = new Schema({
  score: {
    type: Number,
    min: 5.0,
    max: 10
  },
  criteria: CriteriaSchema,
  candidate: {
    type: Schema.Types.ObjectId,
    ref: 'candidate'
  }
})

const CriteriaStore = mongoose.model('criteriaStore', CriteriaScoreSchema)
