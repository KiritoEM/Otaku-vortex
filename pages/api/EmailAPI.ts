import axios from "axios";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";

export default function EmailAPI(APIurl: string, e: any) {
  //stop default page actualisation
  e.preventDefault();
  const formData = e.target as HTMLFormElement;
  const email = formData["email"]?.value;
  const emailValue = formData["emailValue"]?.value;
  console.log("email: ", email);
  console.log("contenu de l' email: : ", emailValue);

  emailjs
    .send(
      "service_2nt5xul",
      "template_ls910gf",
      {
        email: email,
        emailValue: emailValue,
      },

      "ud-obJwoi4xljVk1H"
    )
    .then((response) => {
      console.log("E-mail envoyé avec succès:", response.text);
    })
    .catch((error) => {
      console.error("Erreur lors de l'envoi de l'e-mail:", error);
    });
}
