var express = require('express');
var router = express.Router();

var about_controller = require('../../controllers/home/aboutController');

/* GET about page. */
router.get('/', about_controller.about);

module.exports = router;