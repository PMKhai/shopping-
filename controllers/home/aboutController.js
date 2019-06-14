const product = require('../../models/index');

exports.about = async (req, res, next) => {
	const listInCart = await product.listInCart();
    res.render('home/about', {
        tile: 'Về cửa hàng',user: req.user,
        listInCart
    });
}