exports.product_list = (req, res, next) => {
    res.render("home/product", {
        title: "S"
    });
}

exports.product_detail = (req, res, next) => {
    res.render("home/product-detail", {
        title: "Chi Tiết"
    });
}