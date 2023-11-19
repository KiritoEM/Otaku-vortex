import axios from "axios";
import React from "react";

export default function AuthHelper() {
  // Récupération des valeurs de l'input
  const postEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire

    const form = e.currentTarget;
    const email = form["email"].value;
    console.log(email);

    try {
      const response = await axios.post("http://localhost:8000/email/sendEmail", {
        userEmail: email,
      });

      console.log(response.data);
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email :", error);
    }
  };

  const postCode = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire

    const form = e.currentTarget;
    const code = form["code"].value;
    console.log(code);

    try {
      const response = await axios.post("http://localhost:8000/email/codeVerification", {
        userCode: code,
      });

      console.log(response.data);
    } catch (error) {
      console.error("Erreur lors de la vérification du code :", error);
    }
  };

  return { postEmail, postCode };
}
