const express = require('express');
const reportController = require('../controllers/reportController');

const router = express.Router();

router
  .route('/')
  .get(reportController.getAllReports)
  .post(reportController.createReport);

router
  .route('/:id')
  .get(reportController.getReport)
  .patch(reportController.updateReport)
  .delete(reportController.deleteReport);

module.exports = router;
