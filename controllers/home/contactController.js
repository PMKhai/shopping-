const product = require('../../models/index');

exports.contact = async (req, res, next) => {
	if (req.user == null)
        var listInCart = await product.listInCart("guest");
    else
        var listInCart = await product.listInCart(req.user.user_name);
    res.render('home/contact', {
        tile: 'Trang chủ',
        user: req.user,
        listInCart
    });
}

exports.sendContact = async (req, res, next) => {
    await product.send_Contact(req.body);
    res.redirect('/contact');
}
