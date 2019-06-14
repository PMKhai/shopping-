const product = require('../../models/index');

exports.oder_list = async (req, res, next) => {
	const listInCart = await product.listInCart();
    res.render("customer/oder/myoder", {
        title: "S",user: req.user,
        listInCart
    });
}

exports.oder_detail = async (req, res, next) => {
	const listInCart = await product.listInCart();
    res.render("customer/oder/detailoder", {
        title: "Chi Tiết",user: req.user,
        listInCart
    });
}