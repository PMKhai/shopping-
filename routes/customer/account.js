var express = require('express');
var router = express.Router();

var account_controller = require('../../controllers/customer/accountController');


router.get('/forgotpassword', account_controller.account_forgotpassword);
router.get('/login', account_controller.account_login);
router.get('/register', account_controller.account_register);

module.exports = router;