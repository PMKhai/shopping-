var express = require('express');
var router = express.Router();
const passport = require('passport');
var account_controller = require('../../controllers/customer/accountController');

//


router.get('/recover', account_controller.recoverGet);
router.post('/recover', account_controller.recoverPost);
router.get('/register', account_controller.registerGet);
router.post('/register', account_controller.registerPost);
router.get('/login', account_controller.loginGet);
router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}));

router.get('/logout', account_controller.logout);
router.get('/verify', account_controller.verify);
router.get('/changepassword', account_controller.changepasswordGet);
router.post('/changepassword', account_controller.changepasswordPost);
router.get('/notifyrecover', account_controller.notifyrecoverGet);
router.get('/recoverpassword', account_controller.verifyrecoverpassword);
router.post('/recoverpassword', account_controller.changepasswordPost);
module.exports = router;