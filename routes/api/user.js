const express = require('express');
const router = express.Router();
const userController = require('../../controllers/customer/api/userController');

router.get('/checkExistUser', userController.checkExistUser);
router.get('/checkValidPassword', userController.checkValidPassword);
module.exports = router;