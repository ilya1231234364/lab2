const express = require('express');
const distributorController = require('../controllers/distributorController');

const router = express.Router();

router
  .route('/')
  .get(distributorController.getAllDistributors)
  .post(distributorController.createDistributor);

router
  .route('/:id')
  .get(distributorController.getDistributor)
  .patch(distributorController.updateDistributor)
  .delete(distributorController.deleteDistributor);

module.exports = router;
