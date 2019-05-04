var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Customer
///Cart
var checkoutRouter = require('./routes/customer/cart/checkout');
var viewcartRouter = require('./routes/customer/cart/viewcart');

//
var accountRouter = require('./routes/customer/account');
var oderRouter = require('./routes/customer/oder');
var profileRouter = require('./routes/customer/profile');
var wishlistRouter = require('./routes/customer/wishlist');
//Home
var indexRouter = require('./routes/home');
var blogRouter = require('./routes/home/blog');
var aboutRouter = require('./routes/home/about');
var contactRouter = require('./routes/home/contact');
var faqRouter = require('./routes/home/faq');
//Product
var productRouter = require('./routes/product');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Customer
////Cart
app.use('/checkout', checkoutRouter);
app.use('/viewcart', viewcartRouter);
//
app.use('', accountRouter);
app.use('/oder', oderRouter);
app.use('/profile', profileRouter);
app.use('/wishlist', wishlistRouter);
//home
app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/blog', blogRouter);
app.use('/faq', faqRouter);
app.use('/contact', contactRouter);
//Product
app.use('/product', productRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
