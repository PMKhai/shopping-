var express = require('express');
var router = express.Router();

var viewcart_controller = require('../../../controllers/customer/cart/viewcartController');


router.get('/', viewcart_controller.viewcart);
router.get('/delete/:name', viewcart_controller.delete);
// router.post('/update/:listInCart', viewcart_controller.viewcart_edit);

module.exports = router;