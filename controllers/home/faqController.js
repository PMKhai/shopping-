exports.faq = (req, res, next) => {
    res.render('home/faq', {
        tile: 'Trang chủ',user: req.user
    });
}