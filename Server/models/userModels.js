const mongoose = require("mongoose");

//create user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    maxlength: 20,
    minlength: 10,
    trim: true,
    default: "User",
  },

  email: {
    type: String,
    required: true,
    trim: true,
    match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, //regex generate
    unique: true,
  },

  dateCreation: {
    type: Date,
    default: Date.now,
  },
});

//create user model
const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
