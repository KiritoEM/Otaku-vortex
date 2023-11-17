
interface IloginData{
   cover_src: string,
   emailPlaceholder:string,
   PasswordPlaceholder:string,
   google_img: string
}

export default function AuthDataHelper() {
   const loginData: IloginData= {
     cover_src: "/Authentification/cover.jpg",
     emailPlaceholder:"Votre email ...",
     PasswordPlaceholder:"Votre mot de passe ...",
     google_img: "/Authentification/icons8-google.png"
   }

   return {loginData}
}
