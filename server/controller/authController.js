const authService = require("../services/authServices");

const loginController = (req, res) => {
    const accountLog = req.body;
    console.log(accountLog);
}

module.exports = {
    loginController
}