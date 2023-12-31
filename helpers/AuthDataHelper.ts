import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";

interface IloginData {
  cover_src: string;
  emailPlaceholder: string;
  PasswordPlaceholder: string;
  google_img: string;
}

export default function AuthDataHelper() {
  const loginData: IloginData = {
    cover_src: "/Authentification/cover-removebg.png",
    emailPlaceholder: "Votre email ...",
    PasswordPlaceholder: "Votre mot de passe ...",
    google_img: "/Authentification/icons8-google.png",
  };

  const signupData = {
    userNamePlaceholder: "nom d'utilisateur ...",
    passwordPlaceholder: "nouveau mot de passe ...",
    namelabel:"nom d' utilisateur",
    passwordlabel:"mot de passe",
    nameIcon: faUser,
    passwordIcon: faLock
  };

  return { loginData, signupData };
}
