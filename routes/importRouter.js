const express = require('express');
const router = express.Router();
const importController = require("../controllers/importController");

router.get('/', importController.getImportPage);
// router.post('/add', saleController.addSaleReceipt);

module.exports = router;