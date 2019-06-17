var express = require('express');
var router = express.Router();

var profile_controller = require('../../controllers/customer/profileController');
var account_controller = require('../../controllers/customer/accountController');

router.get('/', profile_controller.profile);
router.post('/', account_controller.updatePost);

module.exports = router;