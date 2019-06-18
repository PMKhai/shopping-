const product = require('../../../models/index');
exports.viewcart = async (req, res, next) => {
	if (req.user == null)
        var listInCart = await product.listInCart("guest");
    else
        var listInCart = await product.listInCart(req.user.user_name);
	const listFavorite = await product.listFavorite();
    res.render('customer/cart/viewcart', {
        tile: 'Trang chủ',
        user: req.user,
        listInCart,
        listFavorite
    });
}

exports.delete = async (req, res, next) => {
    if (req.user == null){
        await product.deleting_cartItem(req.params.name, "guest");
    }
    else{
        await product.deleting_cartItem(req.params.name, req.user.user_name);
    }
    res.redirect('/viewcart');
}

// exports.viewcart_edit = async (req, res, next) => {
//     console.log(req.listIncart);
//     if (req.user == null){
//         await product.editing_cartItem(req.listIncart, "guest");
//     }
//     else{
//         await product.editing_cartItem(req.listIncart, req.user.user_name);
//     }
//     res.redirect('./');
// }