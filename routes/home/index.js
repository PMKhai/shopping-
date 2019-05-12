var express = require('express');
var router = express.Router();

var index_controller = require('../../controllers/home/indexController');

/* GET home page. */
router.get('/', index_controller.index);

/* GET product listing. */
router.get('/', index_controller.product_list);

// /* Get product detail*/
// router.get('/:id', product_controller.product_detail);

module.exports = router;