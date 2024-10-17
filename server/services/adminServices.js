const cryptageBcrypt = require("./cryptageBcrypt");
const userModel = require("../models/user");

const addUser = async (newUser) => {
    const user = new userModel();

        user.nom = newUser.Nom;
        user.prenom = newUser.Prenom;
        user.genre = newUser.Genre;
        user.fonction = newUser.fonction;
        user.username = newUser.Username;
        user.password = await cryptageBcrypt.encryptPassword(newDataAdmin.Password);

        return new Promise( (resolve, reject) => {
            admin.save();
        })
}


module.exports = {
    addUser
}