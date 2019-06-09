const product = require('../../models/index');
const userModel = require('../../models/user');
exports.index  = async (req, res, next) => {
    const products = await product.list();
    const  users = await  userModel.get(req.body.user_name);
    console.log(products);
    console.log(users);
    res.render('home/index', {
        tile: 'Trang chủ',
        products,
        users
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
exports.registerGet = (req, res) => {
    res.render('customer/account/register', { title: 'Đăng Kí' })

};


exports.registerPost = async (req, res) => {
    const user = await userModel.get(req.body.user_name);
    if (user)
        return res.render('customer/account/register', {title: 'Đăng ký', message: 'Tài khoản đã tồn tại!'});
      await userModel.register(req.body.user_name,req.body.email, req.body.password);
    res.redirect('./');
};