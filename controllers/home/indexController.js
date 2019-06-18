const product = require('../../models/index');

exports.index  = async (req, res, next) => {
    const products = await product.list();
    //const listInCart = await product.listInCart();
    if (req.user == null)
        var listInCart = await product.listInCart("guest");
    else
        var listInCart = await product.listInCart(req.user.user_name);
    res.render('home/index', {
        tile: 'Trang chủ',
        user: req.user,
        products,
        listInCart
    });
}

/*exports.product_list = async (req, res, next) => {
    const products = await product.list();
    console.log(products);
    res.render('home/index', {
        title: "Cửa hàng",
        products
    })
}*/

