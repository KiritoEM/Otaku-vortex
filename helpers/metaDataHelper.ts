interface ImetaData {
  metaTitle: {
    landingTitle: string;
    loginTitle: string;
    signupTitle: string;
    codeVerification: string;
    signupFinal: string;
    dashboardHome: string;
    dashboardNews: string
  };
}

export default function metaDataHelper() {
  const metaData: ImetaData = {
    metaTitle: {
      landingTitle: "Bienvenue sur Otaku-vortex",
      loginTitle: "Se connecter à Otaku-vortex",
      signupTitle: "S' inscrire à Otaku-vortex",
      codeVerification: "Entrez le code à 6 chiffres",
      signupFinal: "Finaliser votre inscripiton",
      dashboardHome: "Otaku-vortex - Accueil",
      dashboardNews: "Otaku-vortex - Nouveautés"
    },
  };

  return { metaData };
}
