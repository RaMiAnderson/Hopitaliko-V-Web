const admin = require("../models/admin");
const User = require("../models/user");
const cryptedBcrypt = require("./cryptageBcrypt"); 

const loginService = async (user) => {
    try{
        const result = await checkUserInBD(user);
        return result;
    }catch(err){
        console.log("ERROR login service : " + err);
    }
}

const checkUserInBD = async (user) => {
    try {
        // Recherche d'un utilisateur admin
        const adminBase = await admin.findOne({ username: user.username });
        if (adminBase !== null) {
            const resultCheck = await cryptedBcrypt.comparePasswordEncrypted(user.password, adminBase.password);
            if (resultCheck) {
                let response = {
                    username: adminBase.username,
                    fonction: adminBase.fonction,
                    status: 200,
                    message : "Connexion réussi"
                };
                return response;
            }
            return { status: 403, message: "Mot de passe incorrect" };
        } else {
            const userBase = await User.findOne({ username: user.username });
            if (userBase !== null) {
                const resultCheck = await cryptedBcrypt.comparePasswordEncrypted(user.password, userBase.password);
                if (resultCheck) {
                    let response = {
                        username: userBase.username,
                        fonction: userBase.fonction,
                        status: 200,
                        message : "Connexion réussi"
                    };
                    return response;
                }
                return { status: 403, message: "Mot de passe Incorrect" };
                
            } else {
                return { status: 403, message: "Votre username est introuvable" };
            }
        }
    } catch (err) {
        console.log("ERROR login service : " + err);
        throw new Error("ErrorServer "); // Lancer l'erreur pour un meilleur suivi
    }
};



module.exports = {
    loginService
}