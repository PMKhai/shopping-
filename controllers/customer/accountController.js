const userModel = require('../../models/user');
exports.recover = (req, res, next) => {
    res.render("customer/account/forgotpassword", {
        title: "Quên mật khẩu"
    });
}

exports.loginGet = (req, res, next) => {
    res.render("customer/account/login", {
        title: "Đăng nhập" , message:''
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
    res.redirect('./login');
};
exports.logout = (req,res) => {
    req.logout();
    res.redirect('/login');
};
exports.updatePost = async (req, res, next) => {
    await userModel.update(req.user.user_name,req.body);
    res.redirect('./profile');
}