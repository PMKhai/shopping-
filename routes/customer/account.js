var express = require('express');
var router = express.Router();
const passport = require('passport');
var account_controller = require('../../controllers/customer/accountController');
var nodemailer = require("nodemailer");
//
var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "edogawaconanhuyx98@gmail.com",
        pass: "Cotroimoibiet1"
    }
});

router.get('/forgotpassword', account_controller.recover);

router.get('/register', account_controller.registerGet);
router.post('/register', account_controller.registerPost);
router.get('/login', account_controller.loginGet);
router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}));
router.post('/:id', account_controller.updatePost);
router.get('/logout', account_controller.logout);
router.get('/verify', account_controller.verify);
module.exports = router;