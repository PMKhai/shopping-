exports.profile = (req, res, next) => {
    res.render('customer/profile', {
        tile: 'Trang chủ'
    });
}