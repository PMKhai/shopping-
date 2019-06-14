const product = require('../../../models/index');
exports.viewcart = async (req, res, next) => {
	const listInCart = await product.listInCart();
    res.render('customer/cart/viewcart', {
        tile: 'Trang chủ',user: req.user,
        listInCart

    });
}