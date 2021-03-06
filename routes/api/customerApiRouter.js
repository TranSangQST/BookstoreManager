const express = require('express');
const router = express.Router();
const customerApiController = require("../../controllers/api/customerApiController");

router.get('/', customerApiController.getAllCustomerInfor);
router.post('/add', customerApiController.addNewCustomer);
router.get('/phone/:number', customerApiController.getCustomerInforByPhoneNumber);


module.exports = router;
