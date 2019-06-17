const product = require('../../models/index');

exports.profile = async (req, res, next) => {
    if(!req.user)
        res.redirect("/login");
    const listInCart = await product.listInCart();
    res.render('customer/profile', {
        title: 'Thông tin tài khoản',user: req.user,
        listInCart
    });
}
