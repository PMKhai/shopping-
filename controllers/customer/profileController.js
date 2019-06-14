const product = require('../../models/index');

exports.profile = async (req, res, next) => {
	const listInCart = await product.listInCart();
    res.render('customer/profile', {
        tile: 'Thông tin tài khoản',user: req.user,
        listInCart
    });
}