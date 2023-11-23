const blogModel = require("../models/blogModel");

const postBlogHelper = (
  type,
  genre,
  cover,
  title,
  synopsis,
  date,
  episodes,
  affichage,
  status
) => {
  const newBlog = new blogModel({
    type_anime: type,
    genre: genre,
    cover: cover,
    title: title,
    Synopsis: synopsis,
    date: date,
    episodes: episodes,
    typeAffichage: affichage,
    Status:status
  });

  return newBlog.save();
};

const getBlogHelper = () => {
  const blog = blogModel.find();

  return blog;
};

module.exports = { postBlogHelper , getBlogHelper };
