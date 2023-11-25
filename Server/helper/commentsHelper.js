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
    console.log(error);
  }
};

const getComments = async (blogID) => {
  try {
    const comments = await commentsModel.find({ article: blogID }).populate('commentator');
    return comments;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { postComments, getComments };
