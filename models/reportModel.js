const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  honeyQuantity: {
    type: Number,
    required: [true, 'Please, tell honeyQuantity'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
