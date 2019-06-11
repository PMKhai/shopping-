exports.about = (req, res, next) => {
    res.render('home/about', {
        tile: 'Về cửa hàng',user: req.user
    });
}