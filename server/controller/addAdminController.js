const addAdminService = require("../services/addAdminServices");

let tmpAdmin = {
    Nom : "Rakoto",
    Prenom : "Rabe",
    Genre : "Homme",
    Username : "RakRabe",
    Password: "Rab1234#"
}

const addAdminCtrller = async (tmpParams) => {
    try {
        const result = await addAdminService.addAdmin(tmpParams);
    }catch (err){
        console.log("ERROR CONTROLLER ADD ADMIN : " + err);
        
    }
}

// addAdminCtrller(tmpAdmin);

module.exports = {
    addAdminCtrller
}