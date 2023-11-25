const jwt = require("jsonwebtoken");
const { verifyToken } = require("./TokenHelper");
const userModel = require("../models/userModels");
let secretKey = process.env.SECRET_KEY;
let userID;

const sendUser = async (token) => {
  try {
    const decodedToken = verifyToken(token);
    userID = decodedToken.userId;
    console.log("userID :", userID);

    if (decodedToken.userId) {
      const user = await userModel.findOne({ _id: userID });
      return user;
    } else {
      return null;
      console.log("utilisateur non trouvé");
    }
  } catch (err) {
    return null;
    console.log(err);
  }
};

const sendID = async (token) => {
  try {
    const decodedToken = verifyToken(token);
    userID = decodedToken.userId;
    console.log("userID :", userID);

    if (decodedToken.userId) {
      return decodedToken.userId;
    } else {
      return null;
      console.log("utilisateur non trouvé");
    }
  } catch (err) {
    return null;
    console.log(err);
  }
};

module.exports = {
  sendUser,
  sendID,
};
