const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  type_anime: {
    type: String,
    default: "",
  },
  genre: {
    type: String,
    default: "",
    required: true,
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
    trim: true,
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
    type: String,
    required: true,
    default:"Séries"
  },
  typeAffichage:{
     type: Array,
     require: true,
  }
  ,
  Status:{
    type: String,
    required: true
  }
});

//export blog model
const blogModel = mongoose.model("blog", blogSchema);
module.exports = blogModel;
