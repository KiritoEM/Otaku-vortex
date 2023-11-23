const { postBlogHelper } = require("./../helper/blogHelper");

const postBlogController = async (req, res) => {
  const { type, genre, cover, title, synopsis, date, episodes , type_affichage } = req.body;
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

module.exports = { postBlogController };
