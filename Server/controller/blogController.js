const { postBlogHelper, getBlogHelper } = require("./../helper/blogHelper");

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
    type_affichage
  );

  if (response) {
    res.status(200).json({ message: "blog ajouté avec succés" });
  } else {
    res.status(500).json({ message: "Echec de l' ajout du blog" });
  }
};

const getBlogController = async (req, res) => {
  const response = await getBlogHelper();
  console.log(response);

  if (response) {
    res.status(200).json({ blog: response });
  } else {
    res
      .status(500)
      .json({ erreur: "Erreur lors de la récupération des blogs" });
  }
};

module.exports = { postBlogController, getBlogController };
