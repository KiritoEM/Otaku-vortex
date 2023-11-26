import axios from "axios";
import React from "react";
import { useRouter } from "next/router";
import { useAuthentification } from "@/hooks/useAuthentification";

export default function AuthHelper() {
  const router = useRouter();
  const { getToken, setLocalToken } = useAuthentification();

  //Post mail to node
  const postEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const email = form["email"].value;

    try {
      const response = await axios.post(
        "http://localhost:8000/email/sendEmail",
        {
          userEmail: email,
        }
      );

      if (response.status === 200) {
        router.push(`/signup/${email}`);
        alert("email envoyé");
      } else {
        alert("Impossible d' envoyer l' email");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email :", error);
    }
  };

  //post code to node
  const postCode = async (
    e: React.FormEvent<HTMLFormElement>,
    userEmail: string
  ) => {
    e.preventDefault();

    const form = e.currentTarget;
    const code = form["code"].value;

    try {
      const response = await axios.post(
        "http://localhost:8000/email/codeVerification",
        {
          userCode: code,
        }
      );

      if (response.status === 200) {
        router.push(`/signup/signup-final/${userEmail}`);
      } else {
        alert("Impossible d' envoyer l' email");
      }
    } catch (error) {
      console.error("Erreur lors de la vérification du code :", error);
    }
  };

  //signup helper function
  const postSignup = async (
    e: React.FormEvent<HTMLFormElement>,
    userEmail: string
  ) => {
    e.preventDefault();

    const form = e.currentTarget;
    const username = form["username"].value;
    const password = form["password"].value;

    try {
      const response = await axios.post("http://localhost:8000/auth/signup", {
        username: username,
        email: userEmail,
        password: password,
      });

      if (response.status === 200) {
        router.push("/dashboard");
        alert("Bienvenue " + username);
        setLocalToken(response.data.token);
      }
    } catch (error) {
      console.error("Erreur lors de la vérification du code :", error);
    }
  };

  const postLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const email = form["email"].value;
    const password = form["password"].value;

    try {
      const response = await axios.post("http://localhost:8000/auth/login", {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        router.push("/dashboard");
        setLocalToken(response.data.token);
        alert("Nous sommes ravi de vous revoir");
      } else {
        alert("Veuillez reverifier votre email ou mot de passe");
      }
    } catch (error) {
      console.error("Erreur lors de la vérification du code :", error);
    }
  };

  return { postEmail, postCode, postSignup, postLogin };
}
