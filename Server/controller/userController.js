const { sendUser } = require("./../helper/useHelper");

const sendUserController = async (req, res) => {
  const token = req.headers.authorization;

  if (token) {
    const user = await sendUser(token);

    if (user) {
      console.log("user envoyé");
    }

    else{
        console.log("user non envoyé");
    }

    if (user) {
      res.status(200).json({ user: user });
    } else {
      res.status(500).json({
        erreur: "Erreur lors de l' envoi des informations de l' utilisateur",
      });
    }
  } else {
    console.log("Authorisation requis");
    res.status(500).json({ message: "Authorisation requis" });
  }
};

module.exports = { sendUserController };
