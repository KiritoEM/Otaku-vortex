const { postComments, getComments } = require("./../helper/commentsHelper");
const { sendID } = require("./../helper/useHelper");
const commentsModel = require("../models/commentsModel");
const socketIoClient = require("socket.io-client");

//postComments controller function
const postCommentsController = async (req, res) => {
  const { text, blogID } = req.body;
  console.log(req.body);
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
      const socket = socketIoClient("http://localhost:8000");
      socket.emit("comment", response);
      res
        .status(200)
        .json({ message: "Commentaire posté ", comment: response });
    } else {
      res.status(500).json({ message: "Echec de l' envoi du commentaire" });
    }
  } else {
    console.log("Authorisation requis");
    res.status(500).json({ message: "Authorisation requis" });
  }
};

const getCommentsController = async (req, res) => {
  let blogId = req.params.blogID;
  const token = req.headers.authorization;

  if (token) {
    const response = await getComments(blogId);

    if (response) {
      res.status(200).json({ response });
    } else {
      await res.json({ message: "Echec de l' affichage du commentaire" });
    }
  } else {
    console.log("Authorisation requis");
    res.status(500).json({ message: "Authorisation requis" });
  }
};

module.exports = { postCommentsController, getCommentsController };
