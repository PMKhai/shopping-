var createError = require('http-errors');
var express = require('express');
var hbs = require('hbs');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//authen zone
const session = require("express-session");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
//

//
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
var indexRouter = require('./routes/home/index');
var blogRouter = require('./routes/home/blog');
var aboutRouter = require('./routes/home/about');
var contactRouter = require('./routes/home/contact');
var faqRouter = require('./routes/home/faq');
//Product
var productRouter = require('./routes/product');
//
const apiUserRouter = require('./routes/api/user');
const User = require('./models/user');

passport.use(new LocalStrategy({usernameField: 'user_name'},
    async function (user_name, password, done) {
      try {
        const user = await User.get(user_name);
        if (!user) {
          return done(null, false, {message: 'Incorrect username.'});
        }
        const isPasswordValid = await User.validPassword(user_name, password);
        if (!isPasswordValid) {
          return done(null, false, {message: 'Incorrect password.'});
        }
        return done(null, user);
      } catch (ex) {
        return done(ex);
      }
    }));

passport.serializeUser(function (user, done) {
  done(null, user.user_name);
});

passport.deserializeUser(async function (user_name, done) {
  const user = await User.get(user_name);
  done(undefined, user);
});

//


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

var blocks = {};

hbs.registerHelper('extend', function(name, context) {
  var block = blocks[name];
  if (!block) {
    block = blocks[name] = [];
  }

  block.push(context.fn(this)); // for older versions of handlebars, use block.push(context(this));
});

hbs.registerHelper('block', function(name) {
  var val = (blocks[name] || []).join('\n');

  // clear the block
  blocks[name] = [];
  return val;
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: "loancute"}));
app.use(passport.initialize());
app.use(passport.session());

//Customer
////Cart
app.use('/checkout', checkoutRouter);
app.use('/viewcart', viewcartRouter);
//
app.use('', accountRouter);
app.use('/order', oderRouter);
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
app.use('/api/user', apiUserRouter);
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


