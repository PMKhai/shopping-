exports.index  = (req, res, next) => {
    res.render('home/index', {
        tile: 'Trang chủ'
    });
}