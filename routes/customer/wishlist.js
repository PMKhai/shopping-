var express = require('express');
var router = express.Router();

var wishlist_controller = require('../../controllers/customer/wishlistController');


router.get('/', wishlist_controller.wishlist);

router.get('/delete/:name', wishlist_controller.delete);


module.exports = router;