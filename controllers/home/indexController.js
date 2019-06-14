const product = require('../../models/index');

exports.index  = async (req, res, next) => {
    const products = await product.list();
    const listInCart = await product.listInCart();
    console.log(listInCart);
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

