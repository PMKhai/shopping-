var express = require('express');
var router = express.Router();

var checkout_controller = require('../../../controllers/customer/cart/checkoutController');


router.get('/', checkout_controller.login);
router.get('/billing', checkout_controller.billing);
router.get('/shipping', checkout_controller.shipping);
router.get('/paying', checkout_controller.paying);
router.get('/reviewing', checkout_controller.reviewing);
router.get('/confirming', checkout_controller.confirming);

module.exports = router;