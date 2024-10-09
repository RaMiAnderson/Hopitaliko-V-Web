const adminModel = require("../models/admin");
const addAdmin = async (newDataAdmin) => {
    try{
        const admin = new adminModel();

        admin.nom = newDataAdmin.Nom;
        admin.prenom = newDataAdmin.Prenom;
        admin.genre = newDataAdmin.Genre;
        admin.fonction = "Admin";
        admin.username = newDataAdmin.Username;
        admin.password = newDataAdmin.Password;

        return new Promise( (resolve, reject) => {
            admin.save( (err) => {
                if(err){
                    console.log("ERROR SAVING IN BD : "+ err);
                    reject("");
                }
                resolve(admin);
            })
        })
    }catch (err) {
        console.log(err);
    }
};
let tmpAdmin = {
    Nom : "Rakoto",
    Prenom : "Rabe",
    Genre : "Homme",
    Username : "RakRabe",
    Password: "Rab1234#"
}
addAdmin(tmpAdmin);

module.exports = {
    addAdmin
}