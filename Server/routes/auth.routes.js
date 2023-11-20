const express = require("express");
const router = express.Router();
const { signupController } = require("../controller/AuthController");

//route signup
router.post("/signup", signupController);

module.exports = router;
