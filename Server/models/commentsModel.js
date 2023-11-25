const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  commentator: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
    required: true,
  },
  article: { type: mongoose.Schema.ObjectId, ref: "blog", required: true },

  content: {
    type: String,
    required: true,
  },
});

//export blog model
const commentsModel = mongoose.model("comments", blogSchema);
module.exports = commentsModel;
