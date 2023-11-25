const express = require("express");
const router = express.Router();
const { postCommentsController } = require("../controller/commentsController");

//route postComments
router.post("/post", postCommentsController);

module.exports = router;
