const authService = require("../services/authServices");
const genTokenUsrr = require("../tools/jwtToken");


const loginController = async (req, res) => {
    try{
        const result = await authService.loginService(req.body);
        const userValid = {
            username : result.username,
            fonction : result.fonction
        }
        genTokenUsrr.genTokenUsr(userValid, result.message, result.status, res);
    }catch(err){
        console.log("ERROR Login :" + err);
    }
}

const verifyAndGetUser = async (req, res) => {
    try{
        const dataUser = await authService.verifyU_srvc(req.body);
        res.json(dataUser);
    }catch (err){
        console.log("ERROR VERIFY USER " + err);
    }
}

module.exports = {
    loginController,
    verifyAndGetUser
}