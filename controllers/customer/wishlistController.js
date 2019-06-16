const product = require('../../models/index');

exports.wishlist = async (req, res, next) => {
	const listInCart = await product.listInCart();
    const listFavorite = await product.listFavorite(req.user.user_name);
    console.log(req.query.user_name);
    res.render('customer/wishlist', {
        tile: 'Trang chủ',
        user: req.user,
        listInCart,
        listFavorite
    });
}

exports.delete = async (req, res, next) => {
    await product.deleting(req.params.name, req.user.user_name);
    res.redirect('/wishlist');
}