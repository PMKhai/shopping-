const product = require('../../models/index');

exports.about = async (req, res, next) => {
	if (req.user == null)
        var listInCart = await product.listInCart("guest");
    else
        var listInCart = await product.listInCart(req.user.user_name);
    res.render('home/about', {
        tile: 'Về cửa hàng',user: req.user,
        listInCart
    });
}