const { postComments } = require("./../helper/commentsHelper");
const { sendID } = require("./../helper/useHelper");

//postComments controller function
const postCommentsController = async (req, res) => {
  const { text, blogID } = req.body;
  const token = req.headers.authorization;
  const userID = await sendID(token);

  if (userID) {
    console.log("userID envoyé");
  } else {
    console.log("userID non envoyé");
  }

  if (token) {
    const response = await postComments(text, userID, blogID);
    if (response) {
      res.status(200).json({ message: "Commentaire posté " });
    } else {
      res.status(500).json({ message: "Echec de l' envoi du commentaire" });
    }
  } else {
    console.log("Authorisation requis");
    res.status(500).json({ message: "Authorisation requis" });
  }
};

module.exports = { postCommentsController };
