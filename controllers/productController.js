const product = require('../models/product');

exports.product_list = async (req, res, next) => {
    const productdetail = await product.detail(req.params.id);
    const productList = await product.list();

    let a = [];
    for (let i = 0; i < 5; i++)
        a.push(i);

    const b = req.user.listorder[0];
    console.log(productdetail);
    console.log(productList);

    if (req.user == null)
        var listInCart = await product.listInCart("guest");
    else
        var listInCart = await product.listInCart(req.user.user_name);
    res.render('product/product', {
        title: "Cửa hàng",
        productdetail,
        productList,
        user: req.user,
        listInCart
    })
}

exports.product_detail = async (req, res, next) => {

    const productdetail = await product.detail(req.params.id);
    const productsList = await product.productsBySex(productdetail.sex);
    const listInCart = await product.listInCart();
    console.log(productdetail);
    console.log(productsList);
    res.render('product/product-detail', {
        title: productdetail.name,
        productdetail,

        productsList,
        user: req.user,
        listInCart
    })
}