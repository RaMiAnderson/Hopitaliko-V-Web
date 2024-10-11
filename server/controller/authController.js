const authService = require("../services/authServices");

const loginController = async (req, res) => {
    const accountLog = req.body;
    const result = await authService.loginService(accountLog);
    console.log(result);
}

module.exports = {
    loginController
}