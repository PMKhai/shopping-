<<<<<<< HEAD
exports.profile = (req, res, next) => {
    if(!req.user)
        res.redirect("/login");
=======
const product = require('../../models/index');

exports.profile = async (req, res, next) => {
	const listInCart = await product.listInCart();
>>>>>>> 14025a3fe5cbb67ab9edf468fcf6dfecbdff58cb
    res.render('customer/profile', {
        tile: 'Thông tin tài khoản',user: req.user,
        listInCart
    });
}