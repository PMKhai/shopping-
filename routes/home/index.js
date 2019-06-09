var express = require('express');
var router = express.Router();
const passport = require('passport');

var index_controller = require('../../controllers/home/indexController');

/* GET home page. */
router.get('/', index_controller.index);

/* GET product listing. */
router.get('/', index_controller.product_list);
/**/
router.post('/register', index_controller.registerPost);
router.get('/register', index_controller.registerGet);
router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}));
//router.get('/logout', homeControllers.logout);


// /* Get product detail*/
// router.get('/:id', product_controller.product_detail);

module.exports = router;