const product = require('../../models/index');

exports.contact = async (req, res, next) => {
	const listInCart = await product.listInCart();
    res.render('home/contact', {
        tile: 'Trang chủ',user: req.user,
        listInCart
    });
}