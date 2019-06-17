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
exports.checkIsActivated = async (user_name) => {

    if(await check(user_name))
    {
        const  user =  await get(user_name);
        if(user.isActivated)
            return  user;
    }
    return  false;

}
exports.check = check;

exports.register = async (user_name,email, password,token) => {
    const hash = await bcrypt.hash(password, SALT_ROUNDS);
    return await dbs.production.collection(USERS).insertOne({user_name,email, password: hash,name:'',
        p_number:'',address:'',token:token,isActivated: false});
};



exports.update = async (user_name,info,token) => {

    if(token != "") // email was changed
    {
        return await dbs.production.collection(USERS).updateOne({
            user_name : user_name
        }, {
            $set: {
                name: info.name,
                dob: info.dob,
                address: info.address,
                p_number: info.p_number,
                email: info.email,
                token: token,
                isActivated : false,
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
            dob: info.dob
        }
    }, {
        upsert: true
    })
};
exports.changepassword = async (user_name,info) => {


      if(info.update_password != "" )
      {
          const hash = await bcrypt.hash(info.update_password, SALT_ROUNDS);
          return await dbs.production.collection(USERS).updateOne({
              user_name : user_name
          }, {
              $set: {
                 password: hash ,
              },
              $unset: {
                  recoverToken: 1,
              }
          }, {
              upsert: true
          })
      }

};
exports.validPassword = async (user_name, password) => {
    //const hash = await bcrypt.hash(password, SALT_ROUNDS);
    const user = await get(user_name);
    if (!user)
        return false;
    return await bcrypt.compare(password, user.password);
};
exports.verifyemail = async (token) => {

    const user = await dbs.production.collection(USERS).findOne({token});
    if(user)
    {
        await dbs.production.collection(USERS).updateOne({
            token : token
        }, {
            $set: {
                isActivated: true,
            },
            $unset: {
                token: 1,
            }
        }, {
            upsert: true
        })
    }
    return user;

};
exports.addRecoverToken = async (user_name,recoveryToken) => {


    return await dbs.production.collection(USERS).updateOne({
        user_name : user_name
    }, {
        $set: {
            recoverToken: recoveryToken ,
        }
    }, {
        upsert: true
    })


};
exports.verifyRecoverToken = async (recoverToken) => {

    const user = await dbs.production.collection(USERS).findOne({recoverToken});
    if(user)
    {
        await dbs.production.collection(USERS).updateOne({
            token : recoverToken
        }, {
            $unset: {
                recoverToken: 1,
            }
        }, {
            upsert: true
        })
    }
    return user;

};
//cart space/////////
const listInCart =  async (user_name) => {

    var results = await dbs.production.collection('users').findOne({user_name : user_name});

    return results;
}
exports.listInCart = listInCart;
////////////////////

const listFavorite =  async (user_name) => {
    const results = await dbs.production.collection(USERS).findOne({user_name : user_name});
    return results;
}
exports.listFavorite = listFavorite;




