const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

router.post("/login", authController.loginController);
router.post("/verifyUser", authController.verifyAndGetUser);

module.exports = router;