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

const productsBySex = async (sexs) => {
    const results = await dbs.production.collection('products').find({
        sex: sexs
    }).toArray();
    return results;
}
const listInCart =  async () => {
    const results = await dbs.production.collection('carts').find({}).toArray();
    return results;
}
exports.listInCart = listInCart;

exports.detail = detail;
exports.list = list;
exports.productsBySex = productsBySex;

const listFavorite =  async () => {
    const results = await dbs.production.collection('favoriteLists').find({}).toArray();
    return results;
}
exports.listFavorite = listFavorite;