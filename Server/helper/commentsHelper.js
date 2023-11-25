const commentsModel = require("../models/commentsModel");

const postComments = async (text, commentator, blog) => {
  try {
    const newComment = new commentsModel({
      content: text,
      commentator: commentator,
      article: blog,
    });
    return await newComment.save();
  } catch (error) {
    console.log(error)
  }
};

module.exports = { postComments };
