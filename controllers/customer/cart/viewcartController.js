const product = require('../../../models/index');
exports.viewcart = async (req, res, next) => {
	if (req.user == null)
        var listInCart = await product.listInCart("guest");
    else
        var listInCart = await product.listInCart(req.user.user_name);
	const listFavorite = await product.listFavorite();
    res.render('customer/cart/viewcart', {
        tile: 'Trang chủ',
        user: req.user,
        listInCart,
        listFavorite
    });
}