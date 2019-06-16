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
    return await dbs.production.collection(USERS).insertOne({user_name,email, password: hash,name:'',p_number:'',address:''});
};

exports.update = async (user_name,info) => {
    if(info.update_password != "" )
    {
        const hash = await bcrypt.hash(info.update_password, SALT_ROUNDS);
        return await dbs.production.collection(USERS).updateOne({
            user_name : user_name
        }, {
            $set: {
               password: hash ,
                name: info.name,
                address: info.address,
                p_number: info.p_number,
                email: info.email
            }
        }, {
            upsert: true
        })
    }

    return await dbs.production.collection(USERS).updateOne({
        user_name : user_name
    }, {
        $set: {
            name: info.name,
            address: info.address,
            p_number: info.p_number,
            email: info.email,
        }
    }, {
        upsert: true
    })
};
exports.validPassword = async (user_name, password) => {
    //const hash = await bcrypt.hash(password, SALT_ROUNDS);
    const user = await get(user_name);
    if (!user)
        return false;
    return await bcrypt.compare(password, user.password);
};

const listInCart =  async () => {
    const results = await dbs.production.collection('carts').find({}).toArray();
    return results;
}
exports.listInCart = listInCart;

const listFavorite =  async () => {
    const results = await dbs.production.collection('favoriteLists').find({}).toArray();
    return results;
}
exports.listFavorite = listFavorite;




