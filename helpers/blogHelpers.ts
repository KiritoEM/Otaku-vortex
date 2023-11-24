import { useCallback, useEffect } from "react";
import axios from "axios";

export default function blogHelpers() {
  const fetchBlogs = async () => {
    try {
      const response = await fetch("http://localhost:8000/blog/get");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erreur lors de la récupération des blogs", error);
      throw error;
    }
  };

  const postBlog = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    let genre = form["genre"].value;
    let cover = form["cover"].value;
    let title = form["title"].valueOf;
    let date = form["date"].value;
    let type_affichage = form["type_affichage"].value;
    let status = form["status"].value;
    let synopsis = form["synopsis"].value;
    let episodes = form["episodes"].value;
    console.log(e.currentTarget);

    try {
      const response = await axios.post("http://localhost:8000/blog/post", {
        type: "",
        genre: genre,
        cover: cover,
        title: title,
        synopsis: synopsis,
        date: date,
        episodes: episodes,
        type_affichage: [`${type_affichage}`],
        status: status,
      });

      if (response.status === 200) {
        alert("blog ajouté avec succés");
      } else {
        alert("Echec de l' ajout du blog");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email :", error);
    }
  };

  return { fetchBlogs, postBlog };
}
