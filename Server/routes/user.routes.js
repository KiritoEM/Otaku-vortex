const express = require("express");
const router = express.Router();
const { sendUserController } = require("./../controller/userController");

//route sendUser with token
router.get("/", sendUserController);

module.exports = router;
