const mongoose = require("mongoose");
const dbConfig = require("./databaseConfig");
mongoose.Promise = global.Promise;

const uri = dbConfig.url;

const initDataBase = () => {
    mongoose.connect(uri).then( () => {
        console.log("Connecté au MONGODB. URI = " + uri);
    },
    err => {
        console.log("ERR connexion au BD; raison : " + err);        
    });
}

module.exports = {
    initDataBase
}