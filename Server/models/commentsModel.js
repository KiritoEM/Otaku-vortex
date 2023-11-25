const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  date: {
    type: String,
    default: "",
  },
  commentator: {
    type: String,
    required: true
  },
   article:{
    type: mongoose.Schema.ObjectId,
    ref:"blog"
  }
  ,
  content:{
    type: String,
    required: true,
  }
});

//export blog model
const blogModel = mongoose.model("comments", blogSchema);
module.exports = blogModel;
