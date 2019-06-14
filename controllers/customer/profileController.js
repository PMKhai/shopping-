exports.profile = (req, res, next) => {
    if(!req.user)
        res.redirect("/login");
    res.render('customer/profile', {
        tile: 'Thông tin tài khoản',user: req.user
    });
}