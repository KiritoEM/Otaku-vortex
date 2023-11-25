const userModel = require("../models/userModels");
const bcrypt = require("bcrypt");

//signup function helper
const signupHelper = (username, email, password) => {
  const newUser = new userModel({
    username: username,
    email: email,
    password: password,
  });

  return newUser.save();
};

//hash password
const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
  } catch (err) {
    console.log(err);
  }
};

//check if mail already exist
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

//login helper function
const loginHelper = async (email, password) => {
  try {
    const user = await userModel.findOne({ email: email });

    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        return user; 
      } else {
        return null; 
      }
    } else {
      return null;
    }
  } catch (err) {
    console.error(err);
    return null;
  }
};


module.exports = { signupHelper, hashPassword, checkEmail, loginHelper };
