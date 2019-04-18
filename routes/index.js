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

/*GET myoder page. */
router.get('/myoder', (req, res, next) => {
  res.render('myoder', { title: 'Lịch sử đơn hàng' });
});
/*GET detailoder page. */
router.get('/detailoder', (req, res, next) => {
  res.render('detailoder', { title: 'Lịch sử đơn hàng' });
});
/*GET viewcart page. */
router.get('/viewcart', (req, res, next) => {
  res.render('viewcart', { title: 'Quản lý giỏ đồ' });
});
/*GET blog page. */
router.get('/blog', (req, res, next) => {
  res.render('blog', { title: 'Blog' });
});
/*GET about page. */
router.get('/about', (req, res, next) => {
  res.render('about', { title: 'Blog' });
});
/*GET blog page. */
router.get('/contact', (req, res, next) => {
  res.render('contact', { title: 'Blog' });
});
module.exports = router;
