exports.account_forgotpassword = (req, res, next) => {
    res.render("customer/account/forgotpassword", {
        title: "S"
    });
}

exports.account_login = (req, res, next) => {
    res.render("customer/account/login", {
        title: "Chi Tiết"
    });
}
exports.account_register = (req, res, next) => {
    res.render("customer/account/register", {
        title: "Chi Tiết"
    });
}