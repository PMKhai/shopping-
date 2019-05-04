var express = require('express');
var router = express.Router();

var profile_controller = require('../../controllers/customer/profileController');


router.get('/', profile_controller.profile);


module.exports = router;