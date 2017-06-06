const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CriteriaSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required.']
  },
  percentValue: {
    type: Number,
    required: [true, 'Percent value is required.']
  }
})

module.exports = CriteriaSchema
