
exports.oder_list = (req, res, next) => {

    if(!req.user)
        res.redirect("/login");
    const listorder = req.user.listorder;
    res.render("customer/oder/myoder", {
        title: "S",user: req.user,listorder
    });
}

exports.order_detail = async (req, res, next) => {

    if(!req.user)
        res.redirect("/login");
    const detailorder = req.user.listorder[req.params.id];

    console.log(detailorder);
    res.render("customer/oder/detailoder", {
        title: "Chi Tiết",user: req.user,detailorder
    });
}