exports.blog = (req, res, next) => {
    res.render('home/blog', {
        tile: 'Trang chủ',user: req.user
    });
}