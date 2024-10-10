const bcrypt = require("bcrypt");

const encryptPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 7).then((hash) => {
            resolve(hash);
        }).catch((error) => {
            const errMsg = "ERROR PASSWORD CRPT";
            console.log(error);
            reject(errMsg);
        });
    });
}

const comparePasswordEncrypted =  (passNotCrypted, passCrypted) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(passNotCrypted, passCrypted).then((valid) => {
            if(valid){
                resolve(true);
            }
            resolve(false);
        }).catch((error) => {
            console.log(" EEROR COMPARE PSWRD " + error);
            reject("ERROR COMPARE PSWRD");
        });
    });
}

module.exports = {
    encryptPassword,
    comparePasswordEncrypted
}