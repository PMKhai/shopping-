var express = require('express');
var router = express.Router();

var product_controller = require('../controllers/productController');

/* GET product listing. */
router.get('/', product_controller.product_list);

/* Get product detail*/
router.get('/:id', product_controller.product_detail);

module.exports = router;