const { postBlogHelper, getBlogHelper } = require("./../helper/blogHelper");
const { verifyToken } = require("./../helper/TokenHelper");
const { sendUser } = require("./../helper/useHelper");

const postBlogController = async (req, res) => {
  const {
    type,
    genre,
    cover,
    title,
    synopsis,
    date,
    episodes,
    type_affichage,
    status,
  } = req.body;
  console.log(req.body);

  const response = await postBlogHelper(
    type,
    genre,
    cover,
    title,
    synopsis,
    date,
    episodes,
    type_affichage,
    status
  );

  if (response) {
    res.status(200).json({ message: "blog ajouté avec succés" });
  } else {
    res.status(500).json({ message: "Echec de l' ajout du blog" });
  }
};

const getBlogController = async (req, res) => {
  const token = req.headers.authorization;

  if (token) {
    const response = await getBlogHelper();
    
    if (response) {
      res.status(200).json({ blog: response });
    } else {
      res
        .status(500)
        .json({ erreur: "Erreur lors de la récupération des blogs" });
    }
  } else {
    console.log("Authorisation requis");
    res.status(500).json({ message: "Authorisation requis" });
  }
};

module.exports = { postBlogController, getBlogController };
