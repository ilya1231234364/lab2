const Distributor = require('../models/distributorModel');
const Customer = require('../models/customerModel');
const factory = require('./handlerFactory');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.createDistributor = factory.createOne(Distributor);

exports.getDistributor = factory.getOne(Distributor);
exports.getAllDistributors = factory.getAll(Distributor);
exports.updateDistributor = factory.updateOne(Distributor);
exports.deleteDistributor = catchAsync(async (req, res, next) => {
  const doc = await Distributor.findByIdAndDelete(req.params.id);
  if (!doc) {
    return next(new AppError('No document found with that ID', 404));
  }
  Customer.updateMany(
    { distributor: doc._id },
    {
      $set: { distributor: null },
    }
  );

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
