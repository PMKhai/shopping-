const ObjectId = require('mongodb').ObjectId;
const bcrypt = require('bcrypt');
const {dbs} = require('../dbs');

const USERS = 'users';
const SALT_ROUNDS = 10;
/**
 *
 * @param username
 * @param password
 * @return user
 */
/*exports.verify = async (user_name, password) => {
    const user = await dbs.production.collection(USERS).findOne({user_name: user_name})
    if (user)
        return undefined;
    // verify password
    // ...
    return results[0];
};*/

const get = async (user_name) => {
    return await dbs.production.collection(USERS).findOne({user_name});
};


exports.get = get;

const check = async (user_name) => {
    const user = await dbs.production.collection(USERS).findOne({user_name});
    if (user)
        return true;
    return false;
};

exports.check = check;
exports.register = async (user_name,email, password) => {
    const hash = await bcrypt.hash(password, SALT_ROUNDS);
    return await dbs.production.collection(USERS).insertOne({user_name,email, password: hash});
};

exports.validPassword = async (user_name, password) => {
    //const hash = await bcrypt.hash(password, SALT_ROUNDS);
    const user = await get(user_name);
    if (!user)
        return false;
    return await bcrypt.compare(password, user.password);
};