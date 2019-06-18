var express = require('express');
var router = express.Router();

var contact_controller = require('../../controllers/home/contactController');

/* GET about page. */
router.get('/', contact_controller.contact);
router.post('/', contact_controller.sendContact);
module.exports = router;