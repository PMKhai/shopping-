const userModel = require('../../models/user');
const product = require('../../models/index');
const bcrypt = require('bcrypt');
var nodemailer = require("nodemailer");



exports.recover = async (req, res, next) => {
    const listInCart = await product.listInCart();
    res.render("customer/account/forgotpassword", {
        title: "Quên mật khẩu",
        listInCart
    });
}

exports.loginGet = async (req, res, next) => {
    const listInCart = await product.listInCart();
    res.render("customer/account/login", {
        title: "Đăng nhập" , message:'',
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
    if(!req.user)
        res.redirect("/login");
    const listInCart = await product.listInCart();
    res.render("customer/account/changepassword", {
        title: "Thay đổi mật khẩu" ,
        user: req.user,
        listInCart
    });
}
const sendmailto = async (req, res) => {
    const  token = await bcrypt.hash(req.body.user_name,0);

    const smtpTransport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "edogawaconanhuyx98@gmail.com",
            pass: "Cotroimoibiet1"
        }
    });
    const link="http://"+req.get('host')+"/verify?id="+token;
    const mailOptions={
        to : req.body.email,
        subject : "Kích hoạt tài khoản shop master",
        html : "Chào bạn!,<br> Hãy click vào đường dẫn bên dưới để xác thực email với tài khoản Shop Master<br><a href="+link+">Click để xác thực</a>"
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
            res.end("error");
        }else{
            console.log("Message sent: " + response.message);
            res.end("sent");
        }
    });
    return  token;
};


exports.registerPost = async (req, res) => {
    const user = await userModel.get(req.body.user_name);
    if (user)
        return res.render('customer/account/register', {title: 'Đăng ký', message: 'Tài khoản đã tồn tại!'});
   const  token = await sendmailto(req,res);
    await userModel.register(req.body.user_name,req.body.email, req.body.password,token);

    res.redirect('./login');
};
exports.logout = (req,res) => {
    req.logout();
    res.redirect('/login');
};
exports.updatePost = async (req, res, next) => {
    // check if email was changed then verify new email
    const user = await userModel.get(req.user.user_name);
    var token = "";

    if(user.email != req.body.email)
    {
        token = await sendmailto(req,res);
    }
    await userModel.update(req.user.user_name,req.body,token);

    res.redirect('./profile');
}
exports.changepasswordPost = async (req, res, next) => {

    await userModel.changepassword(req.user.user_name,req.body);

    res.redirect('./login');
}
exports.verify = async (req, res, next) => {
    var message = "Lỗi xác thực";
        const  user = await userModel.verifyemail(req.query.id)
        if(user)
        {
            console.log("email is verified");
            message = "Tài khoản " + user.user_name + " đã được kích hoạt với email: "  + user.email;
        }
        else
        {
            console.log("email is not verified");
        }


    res.render("customer/account/verifyemail", {
        title: "Kích hoạt email" , message: message,

    });
}