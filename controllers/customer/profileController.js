const product = require('../../models/index');

exports.profile = async (req, res, next) => {
    if(!req.user)
        res.redirect("/login");
    if (req.user == null)
        var listInCart = await product.listInCart("guest");
    else
        var listInCart = await product.listInCart(req.user.user_name);

    const listFavorite = await product.listFavorite(req.user.user_name);

    res.render('customer/profile', {
        tile: 'Thông tin tài khoản',user: req.user,
        listInCart,
        listFavorite

    });
}
