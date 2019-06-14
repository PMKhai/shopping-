const product = require('../../models/index');

exports.faq = async (req, res, next) => {
	const listInCart = await product.listInCart();
    res.render('home/faq', {
        tile: 'Trang chủ',user: req.user,
        listInCart	
    });
}