var express = require('express');
var router = express.Router();

var wishlist_controller = require('../../../controllers/customer/wishlistController');


router.get('/', wishlist_controller.wishlist);


module.exports = router;