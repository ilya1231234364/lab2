const Farm = require('../models/farmModel');
const Report = require('../models/reportModel');
const Worker = require('../models/workerModel');
const Item = require('../models/inventoryItemModel');
const factory = require('./handlerFactory');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
exports.createFarm = factory.createOne(Farm);

exports.getFarm = factory.getOne(Farm);
exports.getAllFarms = factory.getAll(Farm);
exports.updateFarm = factory.updateOne(Farm);

exports.deleteFarm = catchAsync(async (req, res, next) => {
  const doc = await Farm.findByIdAndDelete(req.params.id);
  if (!doc) {
    return next(new AppError('No document found with that ID', 404));
  }
  if (doc.inventory) {
    await Promise.all(
      doc.inventory.map((id) => Item.findByIdAndDelete(id))
    );
  }
  if (doc.reports) {
    await Promise.all(
      doc.reports.map((id) => Report.findByIdAndDelete(id))
    );
  }
  if (doc.workers) {
    await Promise.all(
      doc.workers.map((id) => Worker.findByIdAndDelete(id))
    );
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
