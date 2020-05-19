const moongoose = require('mongoose')

const TransactionSchema = new moongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'Please add some text']
  },
  amount: {
    type: Number,
    required: [true, 'Please add a positive or negative number']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = moongoose.model('Transaction', TransactionSchema)
