exports.oder_list = (req, res, next) => {
    res.render("customer/oder/myoder", {
        title: "S"
    });
}

exports.oder_detail = (req, res, next) => {
    res.render("customer/oder/detailoder", {
        title: "Chi Tiết"
    });
}