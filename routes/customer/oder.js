var express = require('express');
var router = express.Router();

var oder_controller = require('../../../controllers/customer/oderController');


router.get('/', oder_controller.oder_list);

router.get('/detail', oder_controller.oder_detail);
module.exports = router;