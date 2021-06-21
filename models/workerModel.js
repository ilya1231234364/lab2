const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell  name!'],
    minLength: [2, 'A name must be longer, than 2 symbols'],
    maxLength: [20, 'A name must be shorter, than 20 symbols'],
  },
  jobType: {
    type: String,
    enum: ['General', 'Manager'],
    required: [true, 'Please tell jobType General or Manager'],
  },
});

const Worker = mongoose.model('Worker', workerSchema);

module.exports = Worker;
