const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = Schema({
    nom : {type: String, required:true},
    prenom : {type: String, required: true},
    genre : {type: String, required: true, Enumerator : ["Homme", "Femme"]},
    fonction: {type: String, required: true, unique : true},
    username : {type: String, required: true, unique: true},
    password : {type: String, required: true}
});

module.exports = mongoose.model("Admin", adminSchema);