const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  type_anime: {
    type: String,
    default: "",
    required: true,
  },
  genre: {
    type: String,
    default: "",
    required: true
  },
  cover: {
    type: String,
    required: true,
    default: "",
  },
  title: {
    type: String,
    required: true,
    default: "Titre",
  },
  Synopsis: {
    type: String,
    required: true,
    validate: {
      validator: (v) => v.length > 10,
      message: "La valeur doit avoir plus de 10 caractères.",
    },
  },
  date: {
    type: String,
    default: "",
  },
  episodes: {
    type: Number,
    required: true,
    default: 0,
    min: 1,
  },
  typeAffichage:{
     type: Array,
     require: true,
  }
});

//export blog model
const blogModel = mongoose.model("blog", blogSchema);
module.exports = blogModel;
