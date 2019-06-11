exports.viewcart = (req, res, next) => {
    res.render('customer/cart/viewcart', {
        tile: 'Trang chủ',user: req.user
    });
}