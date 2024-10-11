const jwt = require('jsonwebtoken');

const genTokenUsr = (user, msg, statusCode, res) => {
    const token = jwt.sign({username : user.username}, process.env.JWT_SECRET = "Xtten00");
    const cookieName = user.fonction == "Admin" ? "adminToken" : "userToken";
    res.status(statusCode).cookie(cookieName, token).json({
        success: true,
        msg,
        user,
        token
    })
}

module.exports = {
    genTokenUsr
}