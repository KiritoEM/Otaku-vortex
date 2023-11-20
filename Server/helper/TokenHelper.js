const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  try {
    const secretKey = process.env.SECRET_KEY;
    const { _id } = user;
    const userid= _id.toString();
    const payload = { userId: userid };
    const token = jwt.sign(payload, secretKey, { expiresIn: "365d" });
    console.log('token généré: ',token);

    return token;
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

module.exports = {
  generateToken,
};
