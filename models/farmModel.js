const mongoose = require('mongoose');

const farmSchema = new mongoose.Schema({
  owner: {
    type: String,
    required: [true, 'Please tell us owner!'],
    minLength: [2, 'A owner must be longer, than 2 symbols'],
    maxLength: [20, 'A owner must be shorter, than 20 symbols'],
  },
  location: {
    type: String,
    required: [true, 'Please tell location!'],
    minLength: [2, 'A location must be longer, than 2 symbols'],
    maxLength: [200, 'A location must be shorter, than 020 symbols'],
  },
  name: {
    type: String,
    required: [true, 'Please tell us your last name!'],
    minLength: [5, 'A name must be longer, than 2 symbols'],
    maxLength: [20, 'A name must be shorter, than 20 symbols'],
  },
  inventory: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'invItem',
    },
  ],
  workers: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Worker',
    },
  ],
  reports: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Report',
    },
  ],
  distributor: {
    type: mongoose.Schema.ObjectId,
    ref: 'Distributor',
  },
});

farmSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'reports',
    select: '-__v',
  })
    .populate({
      path: 'workers',
      select: '-__v',
    })
    .populate({
      path: 'inventory',
      select: '-__v',
    })
    .populate({
      path: 'distributor',
      select: '-__v',
    });
  next();
});

const Farm = mongoose.model('Farm', farmSchema);

module.exports = Farm;
