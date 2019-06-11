exports.login = (req, res, next) => {
    res.render("customer/cart/checkout/login", {
        title: "S",user: req.user
    });
}

exports.billing = (req, res, next) => {
    res.render("customer/cart/checkout/billing", {
        title: "S",user: req.user
    });
}
exports.shipping = (req, res, next) => {
    res.render("customer/cart/checkout/shipping", {
        title: "S",user: req.user
    });
}

exports.paying = (req, res, next) => {
    res.render("customer/cart/checkout/paying", {
        title: "S",user: req.user
    });
}
exports.reviewing = (req, res, next) => {
    res.render("customer/cart/checkout/reviewing", {
        title: "S",user: req.user
    });
}

exports.confirming = (req, res, next) => {
    res.render("customer/cart/checkout/confirming", {
        title: "S",user: req.user
    });
}
