const product = require('../models/product');
exports.product_list = async (req, res, next) => {
    const products = await product.detail('5cd523a4adcb936f9ce17b25');
    console.log(products);
    res.render('product/product', {title: products.name, products})
}

exports.product_detail = async (req, res, next) => {
    const products = await product.detail('5cd523a4adcb936f9ce17b25');
    console.log(products);
    res.render('product/product-detail', {title: products.name, products})
}