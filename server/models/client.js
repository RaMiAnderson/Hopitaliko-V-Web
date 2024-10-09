const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = Schema({
    nom : {type: String, required:true},
    prenom : {type: String, required: true},
    genre : {type: String, required: true, Enumerator : ["Homme", "Femme"]},
    numClient : {type: Number, required: true, unique : true},
    numberCNI : {type: String, required: true, unique: true},
    dateCNI : {type: Date, required: true},
    lieuCNI : {type: String, required: true},
    numTel : {type: String, required : true, unique : true}
});

module.exports = mongoose.model("User", clientSchema);