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

const listInCart =  async () => {
    const results = await dbs.production.collection('carts').find({}).toArray();
    return results;
}
exports.listInCart = listInCart;

const listFavorite =  async (user_name) => {
    const results = await dbs.production.collection('favoriteLists').findOne({username : user_name});
    return results;
}
exports.listFavorite = listFavorite;

exports.detail = detail;
exports.list = list;
