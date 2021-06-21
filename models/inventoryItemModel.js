const mongoose = require('mongoose');

const invItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'There is name?'],
    minLength: [2, 'A name must be longer, than 2 symbols'],
    maxLength: [20, 'A name must be shorter, than 20 symbols'],
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

const invItem = mongoose.model('invItem', invItemSchema);

module.exports = invItem;
