import axios from "axios";
import React from "react";
import { useRouter } from "next/router";

export default function AuthHelper() {
  const router = useRouter();

  // Récupération des valeurs de l'input
  const postEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const email = form["email"].value;
    console.log(email);

    try {
      const response = await axios.post(
        "http://localhost:8001/email/sendEmail",
        {
          userEmail: email,
        }
      );

      console.log(response);

      if (response.status === 200) {
        router.push(`/codeverification/${email}`);
      } else {
        alert("Impossible d' envoyer l' email");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email :", error);
    }
  };

  const postCode = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    const form = e.currentTarget;
    const code = form["code"].value;
    console.log(code);

    try {
      const response = await axios.post(
        "http://localhost:8001/email/codeVerification",
        {
          userCode: code,
        }
      );

      console.log(response);

    } catch (error) {
      console.error("Erreur lors de la vérification du code :", error);
    }
  };

  return { postEmail, postCode };
}
