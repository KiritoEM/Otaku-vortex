interface ImetaData {
 metaTitle: {landingTitle: string , loginTitle: string}
}

export default function metaDataHelper() {
   const metaData: ImetaData ={
    metaTitle : {
      landingTitle: "Bienvenue sur Otaku-vortex",
      loginTitle:"",
    }
   }

   return {metaData}
}
