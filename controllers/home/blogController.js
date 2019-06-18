const product = require('../../models/index');

exports.blog = async (req, res, next) => {
	if (req.user == null)
        var listInCart = await product.listInCart("guest");
    else
        var listInCart = await product.listInCart(req.user.user_name);
    res.render('home/blog', {
        tile: 'Trang chủ',user: req.user,
        listInCart
    });
}