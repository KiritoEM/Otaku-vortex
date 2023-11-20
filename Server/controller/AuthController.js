const { signupHelper } = require("../helper/AuthHelper");

const signupController = async (req, res) => {
  const { username, email, password } = req.body;

  console.log(req.body);

  try {
    const response = await signupHelper(username, email, password);

    if (response) {
      res.status(200).json({ message: "Inscription réussie" });
    } else {
      res.status(500).json({ message: "Echec de l' inscription" });
    }
  } catch (err) {
    console.log("erreur: ", err);
  }
};

module.exports = { signupController };
