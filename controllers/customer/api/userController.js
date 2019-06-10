const UserController = require('../../../models/user');

exports.check = async (req, res, next) => {
    const userExist = await UserController.check(req.query.user_name);
    res.json(userExist);
};