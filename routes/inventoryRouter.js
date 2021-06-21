const express = require('express');
const inventoryController = require('../controllers/inventoryController');

const router = express.Router();

router
  .route('/')
  .get(inventoryController.getAllItems)
  .post(inventoryController.createItem);

router
  .route('/:id')
  .get(inventoryController.getItem)
  .patch(inventoryController.updateItem)
  .delete(inventoryController.deleteItem);

module.exports = router;
