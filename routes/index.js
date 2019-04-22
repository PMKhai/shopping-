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
/*GET detail product page. */
router.get('/product-detail', (req, res, next) => {
  res.render('product-detail', { title: 'Shop' });
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
router.get('/forgotpassword', (req, res) => {
  res.render('forgotpassword', {title: 'Quên mật khẩu'});
});

/* Get Info page.*/
router.get('/profile', (req, res) => {
  res.render('profile', {title: 'Thông tin tài khoản'});
});

/*GET myoder page. */
router.get('/myoder', (req, res, next) => {
  res.render('myoder', { title: 'Lịch sử đơn hàng' });
});
/*GET detailoder page. */
router.get('/detailoder', (req, res, next) => {
  res.render('detailoder', { title: 'Lịch sử đơn hàng' });
});
/*GET wishlist page. */
router.get('/wishlist', (req, res, next) => {
  res.render('wishlist', { title: 'Quản lý yêu thích' });
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
/*GET checkout-1 page. */
router.get('/checkout-1', (req, res, next) => {
  res.render('checkout-1', { title: 'Blog' });
});
/*GET checkout-2 page. */
router.get('/checkout-2', (req, res, next) => {
  res.render('checkout-2', { title: 'Blog' });
});
/*GET checkout-3 page. */
router.get('/checkout-3', (req, res, next) => {
  res.render('checkout-3', { title: 'Blog' });
});
/*GET checkout-4 page. */
router.get('/checkout-4', (req, res, next) => {
  res.render('checkout-4', { title: 'Blog' });
});
/*GET checkout-5 page. */
router.get('/checkout-5', (req, res, next) => {
  res.render('checkout-5', { title: 'Blog' });
});
/*GET checkout-6 page. */
router.get('/checkout-6', (req, res, next) => {
  res.render('checkout-6', { title: 'Blog' });
});
/*GET faq page. */
router.get('/faq', (req, res, next) => {
  res.render('faq', { title: 'Blog' });
});
module.exports = router;
