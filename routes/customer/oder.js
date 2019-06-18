var express = require('express');
var router = express.Router();

var oder_controller = require('../../controllers/customer/oderController');


router.get('/', oder_controller.oder_list);

router.get('/:id', oder_controller.order_detail);
module.exports = router;