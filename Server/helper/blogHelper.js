const blogModel = require("../models/blogModel");

const postBlogHelper = (type, genre, cover, title, synopsis, date, episodes, affichage) => {
  const newBlog = new blogModel({
    type_anime: type,
    genre: genre,
    cover: cover,
    title: title,
    Synopsis: synopsis,
    date: date,
    episodes: episodes,
    typeAffichage:affichage,
  });

  return newBlog.save();
};

module.exports = { postBlogHelper };
