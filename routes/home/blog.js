var express = require('express');
var router = express.Router();

var blog_controller = require('../../controllers/home/blogController');

/* GET about page. */
router.get('/', blog_controller.blog);

module.exports = router;