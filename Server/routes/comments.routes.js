const express = require("express");
const router = express.Router();
const {
  postCommentsController,
  getCommentsController,
} = require("../controller/commentsController");

//route postComments
router.post("/post", postCommentsController);

//route getComments
router.get("/get/:blogID", getCommentsController);

module.exports = router;
