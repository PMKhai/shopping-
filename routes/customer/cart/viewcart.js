var express = require('express');
var router = express.Router();

var viewcart_controller = require('../../../controllers/customer/cart/viewcartController');


router.get('/', viewcart_controller.viewcart);


module.exports = router;