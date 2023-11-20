const userModel = require("./../models/userModels");

const signupHelper = (username, email, password) => {
  const newUser = new userModel({
    username: username,
    email: email,
    password: password,
  });

  return newUser.save();
};

module.exports = { signupHelper };
