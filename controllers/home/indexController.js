const product = require('../../models/index');

exports.index  = async (req, res, next) => {
    const products = await product.list();

    console.log(products);
    res.render('home/index', {
        tile: 'Trang chủ',
        user: req.user,
        products
    });
}

exports.product_list = async (req, res, next) => {
    const products = await product.list();
    console.log(products);
    res.render('home/index', {
        title: "Cửa hàng",
        products
    })
}
exports.product_detail = async (req, res, next) => {
    const products = await product.detail(req.params.id);
    console.log(products);
    res.render('home/index', {
        title: products.name,
        products
    })
}
