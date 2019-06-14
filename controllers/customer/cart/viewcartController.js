const product = require('../../../models/index');
exports.viewcart = async (req, res, next) => {
	const listInCart = await product.listInCart();
	const listFavorite = await product.listFavorite();
    res.render('customer/cart/viewcart', {
        tile: 'Trang chủ',
        user: req.user,
        listInCart,
        listFavorite
    });
}