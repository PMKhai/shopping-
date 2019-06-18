const userModel = require('../../models/user');
const product = require('../../models/index');
const bcrypt = require('bcrypt');
var nodemailer = require("nodemailer");



exports.recoverGet = async (req, res, next) => {
    const listInCart = await product.listInCart();
    res.render("customer/account/forgotpassword", {
        title: "Quên mật khẩu",
        listInCart
    });
}
exports.notifyrecoverGet = async (req, res, next) => {

    res.render("customer/account/notifyrecover", {
        title: "Thông báo",

    });
}
exports.passwordrecoverGet = async (req, res, next) => {

    res.render("customer/account/recoverpassword", {
        title: "Khôi phục mật khẩu",

    });
}
exports.loginGet = async (req, res, next) => {
    const listInCart = await product.listInCart();
    res.render("customer/account/login", {
        title: "Đăng nhập",
        message: '',
        listInCart
    });
}

exports.registerGet = async (req, res) => {
    const listInCart = await product.listInCart();
    res.render("customer/account/register", {
        title: 'Đăng Kí',
        listInCart,
    });

}
exports.changepasswordGet = async (req, res, next) => {
    if (!req.user)
        res.redirect("/login");
    const listInCart = await product.listInCart();
    res.render("customer/account/changepassword", {
        title: "Thay đổi mật khẩu",
        user: req.user,
        listInCart
    });
}
const smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "minhkhai3012@gmail.com",
        pass: "GoogleMeoMy2307co*0em"
    }
});
const sendmailActivate = async (req, res) => {
    const token = await bcrypt.hash(req.body.user_name, 0);


    const link = "http://" + req.get('host') + "/verify?id=" + token;
    const mailOptions = {
        to: req.body.email,
        subject: "Kích hoạt tài khoản shop master",
        html: "Chào bạn!,<br> Hãy click vào đường dẫn bên dưới để xác thực email với tài khoản Shop Master<br><a href=" + link + ">Click để xác thực</a>"
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error);
            res.end("error");
        } else {
            console.log("Message sent: " + response.message);
            res.end("sent");
        }
    });
    return token;
};
const sendmailRecover = async (req, res, email) => {
    const token = await bcrypt.hash(req.body.user_name, 0);

    const link = "http://" + req.get('host') + "/recoverpassword?id=" + token;
    const mailOptions = {
        to: email,
        subject: "Phục hồi tài khoản shop master",
        html: "Chào bạn!,<br> Hãy click vào đường dẫn bên dưới để phục hồi mật khẩu tài khoản Shop Master<br><a href=" + link + ">Click để phục hồi</a>"
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error);
            res.end("error");
        } else {
            console.log("Message sent: " + response.message);
            res.end("sent");
        }
    });
    return token;
};


exports.registerPost = async (req, res) => {
    const user = await userModel.get(req.body.user_name);
    if (user)
        return res.render('customer/account/register', {
            title: 'Đăng ký',
            message: 'Tài khoản đã tồn tại!'
        });
    const token = await sendmailActivate(req, res);
    await userModel.register(req.body.user_name, req.body.email, req.body.password, token);

    res.redirect('./login');
};
exports.logout = (req, res) => {
    req.logout();
    res.redirect('/login');
};
exports.updatePost = async (req, res, next) => {
    // check if email was changed then verify new email
    const user = await userModel.get(req.user.user_name);
    var token = "";

    if (user.email != req.body.email) {
        token = await sendmailActivate(req, res);
    }
    await userModel.update(req.user.user_name, req.body, token);

    res.redirect('./profile');
}
exports.changepasswordPost = async (req, res, next) => {

    console.log(req.body.update_password);
    console.log("pu pu");
    console.log(req.body);
    await userModel.changepassword(req.body.user_name, req.body);

    res.redirect('./login');
}
exports.recoverPost = async (req, res, next) => {

    var token = "";
    var notify = "CHÚNG TÔI RẤT TIẾC !!!";
    var message = "Có vẻ như tài khoản của bạn không tồn tại, hoặc chưa được kíck hoạt với bất cứ email nào :( !!!";
    const user = await userModel.checkIsActivated(req.body.user_name);
    if (user) {
        notify = "HÃY CHECK EMAIL CỦA BẠN !!!";
        message = "Chúng tôi đã gửi thư đến email của bạn, hãy làm theo hướng dẫn trong thư để lấy lại mật khẩu nhé ^^!";
        token = await sendmailRecover(req, res, user.email);
        await userModel.addRecoverToken(req.body.user_name, token);
    }

    res.render("customer/account/notifyrecover", {
        title: "Thông báo",
        message: message,
        notify

    });
}
exports.verify = async (req, res, next) => {
    var message = "Lỗi xác thực";
    const user = await userModel.verifyemail(req.query.id)
    if (user) {
        console.log("email is verified");
        message = "Tài khoản " + user.user_name + " đã được kích hoạt với email: " + user.email;
    } else {
        console.log("email is not verified");
    }


    res.render("customer/account/verifyemail", {
        title: "Kích hoạt email",
        message: message,

    });
}
exports.verifyrecoverpassword = async (req, res, next) => {
    var message = "Lỗi xác thực";
    const user = await userModel.verifyRecoverToken(req.query.id);
    var user_name = "";
    if (user) {
        console.log("enter recoverpassword zone");
        message = "";
        user_name = user.user_name;
    } else {
        console.log("cannot enter recoverpassword zone");
    }


    res.render("customer/account/recoverpassword", {
        title: "Khôi phục mật khẩu",
        message: message,
        user_name

    });
}