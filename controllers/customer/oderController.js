const product = require('../../models/index');

exports.oder_list = async (req, res, next) => {

    if(!req.user)
        res.redirect("/login");
    const listorder = req.user.listorder;
    if (req.user == null)
        var listInCart = await product.listInCart("guest");
    else
        var listInCart = await product.listInCart(req.user.user_name);
    res.render("customer/oder/myoder", {
        title: "S",user: req.user,
        listorder,
        listInCart
    });
}

exports.order_detail = async (req, res, next) => {

    if(!req.user)
        res.redirect("/login");
    const detailorder = req.user.listorder[req.params.id];
	if (req.user == null)
        var listInCart = await product.listInCart("guest");
    else
        var listInCart = await product.listInCart(req.user.user_name);

    res.render("customer/oder/detailoder", {
        title: "Chi Tiết",user: req.user,
        detailorder,
        listInCart
        });
}
