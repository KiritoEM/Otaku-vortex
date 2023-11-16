const express = require("express");
const router = express.Router(); 
const emailController = require("../controller/emailController");

router.post("/send", emailController.sendEmailController);

module.exports = router;
