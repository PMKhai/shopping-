var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/*GET product page */
router.get('/product', (req, res, next) => {
  res.render('product', { title: 'Shop' });
});

router.get('/login', (req, res) => {
  res.render('loginregister', {title: 'Đăng nhập'});
});

module.exports = router;
