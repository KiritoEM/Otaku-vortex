const {
  signupHelper,
  hashPassword,
  checkEmail,
} = require("../helper/AuthHelper");

const signupController = async (req, res) => {
  const { username, email, password } = req.body;

  //hash password
  const hashedPassword = await hashPassword(password);
  const emailExists = await checkEmail(email)

  try {
    if (!emailExists) {
      const response = await signupHelper(username, email, hashedPassword);

      if (response) {
        res.status(200).json({ message: "Inscription réussie", response });
      } else {
        res.status(500).json({ message: "Echec de l' inscription" });
      }
    }
     else {
      res.json({
        message: "l' utilisateur s'est déja inscris avec cet email",
      });
    }
  } catch (err) {
    console.log("erreur: ", err);
  }
};

module.exports = { signupController };
