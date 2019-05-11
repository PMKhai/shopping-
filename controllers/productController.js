const product = require('../models/product');

exports.product_list = async (req, res, next) => {
    const products = await product.list();
    console.log(products);
    res.render('product/product', {
        title: "Cửa hàng",
        products
    })
}

exports.product_detail = async (req, res, next) => {
    const products = await product.detail('5ccae4b9a7a05d1ec80dee84');
    console.log(products);
    res.render('product/product-detail', {
        title: products.name,
        products
    })
}