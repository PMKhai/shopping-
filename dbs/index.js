const MongoClient = require("mongodb").MongoClient;

// Note: A production application should not expose database credentials in plain text.
// For strategies on handling credentials, visit 12factor: https://12factor.net/config.
// const MKTG_URI = "mongodb://<dbuser>:<dbpassword>@<host1>:<port1>,<host2>:<port2>/<dbname>?replicaSet=<replicaSetName>"
//const PROD_URI = "mongodb://127.0.0.1:27017/data"; // Database local
const PROD_URI =
  "mongodb+srv://khaipham:123456789a@cluster0-lwsla.mongodb.net/LTW-data?retryWrites=true"; //Database cloud

var dbs = {
  production: {}
};

function connect(url) {
  return MongoClient.connect(url).then(client => client.db());
}

exports.initdb = async function() {
  // let databases = await Promise.all([connect(PROD_URI), connect(MKTG_URI)])
  let database = await connect(PROD_URI);
  dbs.production = database;
};

exports.dbs = dbs;
