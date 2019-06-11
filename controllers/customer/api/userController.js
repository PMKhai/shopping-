const UserController = require('../../../models/user');

exports.checkExistUser = async (req, res, next) => {
    const userExist = await UserController.check(req.query.user_name);
    res.json(userExist);
};
exports.checkValidPassword = async (req, res, next) => {
    const validPassword = await UserController.validPassword(req.query.user_name,req.query.password);
    res.json(validPassword);
};
