const Worker = require('../models/workerModel');

const factory = require('./handlerFactory');

exports.getAllWorkers = factory.getAll(Worker);
exports.getWorker = factory.getOne(Worker);
exports.createWorker = factory.createOne(Worker);
exports.updateWorker = factory.updateOne(Worker);
exports.deleteWorker = factory.deleteOne(Worker);
