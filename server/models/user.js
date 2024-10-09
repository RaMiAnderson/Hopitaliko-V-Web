const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
    nom : {type: String, required:true},
    prenom : {type: String, required: true},
    genre : {type: String, required: true, Enumerator : ["Homme", "Femme"]},
    numberCNI : {type: String, required: true, unique: true},
    dateCNI : {type: Date, required: true},
    lieuCNI : {type: String, required: true}, 
    numTel : {type: String, required: true, unique: true},
    fonction: {type: String, required: true},
    idEmployee : {type: String, required: true, unique: true},
    adressLocal : {type: String, required: true},
    numRib : {type: String, required : true},
    userName : {type: String, required: true, unique: true},
    password : {type: String, required: true, unique: true}
});

module.exports = mongoose.model("User", userSchema);