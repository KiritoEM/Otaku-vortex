const express = require("express");
const router = express.Router();
const emailController = require("../controller/emailController");

//route sendEmail
router.post("/sendEmail", emailController.sendEmailController);

//route code-verification
router.post("/codeVerification", emailController.codeVerificationController);

//get email to front
router.get("/getEmail", emailController.sendEmail);

module.exports = router;
