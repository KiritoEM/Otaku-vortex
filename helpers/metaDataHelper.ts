interface ImetaData {
 metaTitle: {landingTitle: string , loginTitle: string, signupTitle: string}
}

export default function metaDataHelper() {
   const metaData: ImetaData ={
    metaTitle : {
      landingTitle: "Bienvenue sur Otaku-vortex",
      loginTitle:"Se connecter",
      signupTitle: "S' inscrire"
    }
   }

   return {metaData}
}
