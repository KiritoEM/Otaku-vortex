const express = require("express");
const router = express.Router();
const { postBlogController } = require("./../controller/blogController");

//route signup
router.post("/post", postBlogController);

//route login

module.exports = router;
