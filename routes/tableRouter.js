const express = require('express');
const router = express.Router();
const tableController = require("../controllers/tableController");

router.get('/user', tableController.user);
router.get('/book', tableController.book);

module.exports = router;
