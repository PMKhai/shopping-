const ObjectId = require('mongodb').ObjectId;
const {
    dbs
} = require('../dbs');

const detail = async (id) => {
    const results = await dbs.production.collection('products').find({
            _id: ObjectId(id)
        })
        .toArray();
    return results[0];
};

const list = async () => {
    const results = await dbs.production.collection('products').find({}).toArray();
    return results;
}

exports.detail = detail;
exports.list = list;


//cart space/////////
const listInCart =  async (user_name) => {

    var results = await dbs.production.collection('users').findOne({user_name : user_name});

    return results;
}
exports.listInCart = listInCart;
////////////////////

//Favorite space////////
const listFavorite =  async (user_name) => {
    const results = await dbs.production.collection('users').findOne({user_name : user_name});
    return results;
}
exports.listFavorite = listFavorite;



//delete favorite item
const deleting = async (name, user) => {
    return await dbs.production.collection('users').update({"user_name":user},{"$pull":{"favoriteProducts":{"name":name}}});
    //const results = await dbs.production.collection('users').findOne({user_name : user}).find({},{favoriteProducts:1});
}
exports.deleting = deleting;
////////////////////////