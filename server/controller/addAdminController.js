const addAdminService = require("../services/addAdminServices");

const addAdminCtrller = async (tmpParams) => {
    try {
        const result = await addAdminService.addAdmin(tmpParams);
    }catch (err){
        console.log("ERROR CONTROLLER ADD ADMIN : " + err);
    }
}


module.exports = {
    addAdminCtrller
}