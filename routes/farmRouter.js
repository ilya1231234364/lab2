const express = require('express');
const farmsController = require('../controllers/farmsController');

const router = express.Router();

router
  .route('/')
  .get(farmsController.getAllFarms)
  .post(farmsController.createFarm);

router
  .route('/:id')
  .get(farmsController.getFarm)
  .patch(farmsController.updateFarm)
  .delete(farmsController.deleteFarm);

module.exports = router;
