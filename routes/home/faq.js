var express = require('express');
var router = express.Router();

var faq_controller = require('../../controllers/home/faqController');

/* GET about page. */
router.get('/', faq_controller.faq);

module.exports = router;