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

exports.detail = detail;
exports.list = list;
exports.productsBySex = productsBySex;