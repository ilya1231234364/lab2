const express = require('express');
const WorkersController = require('../controllers/workersController');

const router = express.Router();

router
  .route('/')
  .get(WorkersController.getAllWorkers)
  .post(WorkersController.createWorker);

router
  .route('/:id')
  .get(WorkersController.getWorker)
  .patch(WorkersController.updateWorker)
  .delete(WorkersController.deleteWorker);

module.exports = router;
