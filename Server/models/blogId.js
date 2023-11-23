const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  type_anime: {
    type: Array,
    default: [],
    required: true,
  },
  genre: {
    type: Array,
    default: [],
  },
  cover: {
    type: String,
    required: true,
    default: "",
  },
  titre: {
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
  },
});

module.exports = mongoose.model("blog", blogSchema);
