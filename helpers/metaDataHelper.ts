interface ImetaData {
 metaTitle: {landingTitle: string , loginTitle: string, signupTitle: string, codeVerification: string}
}

export default function metaDataHelper() {
   const metaData: ImetaData ={
    metaTitle : {
      landingTitle: "Bienvenue sur Otaku-vortex",
      loginTitle:"Se connecter",
      signupTitle: "S' inscrire",
      codeVerification: "Entrez le code à 6 chiffres"
    }
   }

   return {metaData}
}
