const mongoose = require('mongoose');

const distributorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A Distributor must have a name'],
    trim: true,
    minLength: [
      2,
      'A Distributor name must be longer, than 2 symbols',
    ],
    maxLength: [
      100,
      'A Distributor name must be shorter, than 100 symbols',
    ],
  },
  taxes: {
    type: Number,
    required: [true, 'please, provide taxes'],
  },
});

const Distributor = mongoose.model('Distributor', distributorSchema);

module.exports = Distributor;
