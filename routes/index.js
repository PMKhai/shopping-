var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/*GET product page. */
router.get('/product', (req, res, next) => {
  res.render('product', { title: 'Shop' });
});

/*Get Login page. */
router.get('/login', (req, res) => {
  res.render('login', {title: 'Đăng nhập'});
});

/* Get Register page.*/
router.get('/register', (req, res) => {
  res.render('register', {title: 'Tạo tài khoản'});
});

/* Get Forgot password page.*/
router.get('/forgot', (req, res) => {
  res.render('forgotpassword', {title: 'Quên mật khẩu'});
});

/* Get Info page.*/
router.get('/info', (req, res) => {
  res.render('info', {title: 'Thông tin tài khoản'});
});

module.exports = router;
