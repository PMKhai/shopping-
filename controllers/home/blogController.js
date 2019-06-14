const product = require('../../models/index');

exports.blog = async (req, res, next) => {
	const listInCart = await product.listInCart();
    res.render('home/blog', {
        tile: 'Trang chủ',user: req.user,
        listInCart
    });
}