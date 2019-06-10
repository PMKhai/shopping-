const express = require('express');
const router = express.Router();
const userController = require('../../controllers/customer/api/userController');

router.get('/check', userController.check);

module.exports = router