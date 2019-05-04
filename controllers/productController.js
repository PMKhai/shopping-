exports.product_list = (req, res, next) => {
    res.render("product/product", {
        title: "S"
    });
}

exports.product_detail = (req, res, next) => {
    res.render("product/product-detail", {
        title: "Chi Tiết"
    });
}