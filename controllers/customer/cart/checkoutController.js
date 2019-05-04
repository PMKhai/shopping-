exports.login = (req, res, next) => {
    res.render("customer/cart/checkout/login", {
        title: "S"
    });
}

exports.billing = (req, res, next) => {
    res.render("customer/cart/checkout/billing", {
        title: "S"
    });
}
exports.shipping = (req, res, next) => {
    res.render("customer/cart/checkout/shipping", {
        title: "S"
    });
}

exports.paying = (req, res, next) => {
    res.render("customer/cart/checkout/paying", {
        title: "S"
    });
}
exports.reviewing = (req, res, next) => {
    res.render("customer/cart/checkout/reviewing", {
        title: "S"
    });
}

exports.confirming = (req, res, next) => {
    res.render("customer/cart/checkout/confirming", {
        title: "S"
    });
}
