const express = require("express");
const router = express.Router();
const emailController = require("../controller/emailController");

//route sendEmail
router.post("/sendEmail", emailController.sendEmailController);

//route code-verification
router.post("/codeVerification", emailController.codeVerificationController);

module.exports = router;
