const express = require("express");
const router = express.Router();
const {
  postBlogController,
  getBlogController,
} = require("./../controller/blogController");

//route post Blog
router.post("/post", postBlogController);

//route get Blog
router.get("/get", getBlogController);

//route login

module.exports = router;
