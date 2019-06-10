exports.profile = (req, res, next) => {
    res.render('customer/profile', {
        tile: 'Thông tin tài khoản',user: req.userController
    });
}