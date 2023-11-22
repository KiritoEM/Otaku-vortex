const userModel = require("../models/userModels");
const bcrypt = require("bcrypt");

const signupHelper = (username, email, password) => {
  const newUser = new userModel({
    username: username,
    email: email,
    password: password,
  });

  return newUser.save();
};

const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
  } catch (err) {
    console.log(err);
  }
};

const checkEmail = async (email) => {
  try {
    const user = await userModel.findOne({ email: email });

    if (user) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.error(err);
  }
};


module.exports = { signupHelper, hashPassword, checkEmail };