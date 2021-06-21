const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    minLength: [2, 'A name must be longer, than 2 symbols'],
    maxLength: [500, 'A name must be shorter, than 500 symbols'],
    required: [true, 'please set a name'],
  },
  boughtSum: {
    type: Number,
    min: [1, 'min value is 1'],
    max: [10000, 'max value is 10000'],
    required: [true, 'please set a boughtSum'],
  },
  distributor: {
    type: mongoose.Schema.ObjectId,
    ref: 'Distributor',
    required: [true, 'please provide a distributor id'],
  },
});

customerSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'distributor',
    select: '-__v',
  });
  next();
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
