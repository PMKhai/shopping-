const product = require('../../models/index');

exports.wishlist = async (req, res, next) => {
	const listInCart = await product.listInCart();
    const listFavorite = await product.listFavorite();
    console.log(req.query.user_name);
    res.render('customer/wishlist', {
        tile: 'Trang chủ',
        user: req.user,
        listInCart,
        listFavorite
    });
}