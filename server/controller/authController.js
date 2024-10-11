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

module.exports = {
    loginController
}