const userModel = require('../../models/user');
exports.recover = (req, res, next) => {
    res.render("customer/account/forgotpassword", {
        title: "S"
    });
}

exports.loginGet = (req, res, next) => {
    res.render("customer/account/login", {
        title: "Chi Tiết"
    });
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
exports.logout = (req,res) => {
    req.logout();
    res.redirect('/');
};