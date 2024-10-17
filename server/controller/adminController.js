const adminService = require("../services/adminServices");

const addUser = (req, res) => {
    try{
        const result = adminService.addUser(rrq.body);
    }catch (err){
        console.log("ERROR ADD USER +" + err);
    }
}

module.exports = {
    addUser
}