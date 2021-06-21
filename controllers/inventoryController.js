const Item = require('../models/inventoryItemModel');
const factory = require('./handlerFactory');

exports.createItem = factory.createOne(Item);

exports.getItem = factory.getOne(Item);
exports.getAllItems = factory.getAll(Item);
exports.updateItem = factory.updateOne(Item);
exports.deleteItem = factory.deleteOne(Item);
