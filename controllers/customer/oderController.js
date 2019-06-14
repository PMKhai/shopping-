const product = require('../../models/index');

exports.oder_list = async (req, res, next) => {

    if(!req.user)
        res.redirect("/login");
    const listorder = req.user.listorder;
    const listInCart = await product.listInCart();
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
	const listInCart = await product.listInCart();

    res.render("customer/oder/detailoder", {
        title: "Chi Tiết",user: req.user,
        detailorder,
        listInCart
        });
}
