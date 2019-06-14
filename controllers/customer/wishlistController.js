const product = require('../../models/index');

exports.wishlist = async (req, res, next) => {
	const listInCart = await product.listInCart();
    res.render('customer/wishlist', {
        tile: 'Trang chủ',user: req.user,
        listInCart
    });
}