import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRight,
  faEnvelope,
  faHome,
  faNewspaper,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGit, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons/faEnvelopeCircleCheck";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

/*
  type of Navbar Landing
*/
type InavLandingData = {
  logo: string;
  logo_title: string;
  navItems: InavItems[];
  navButton: InavButton[];
  hamburgerButton: IconProp,
};

/*
  interface of navItems from InavLandingData
*/
interface InavItems {
  label: string;
  icon?: IconProp;
  href: string;
}

/*
  interface of navButtons from InavLandingData
*/
interface InavButton {
  label: string;
  href: string;
}

/*
  interface of LandingPage Hero
*/
interface IlandingHero {
  backgroundSource: string;
  buttonIcon: IconProp;
  pictureSource: string;
}

/*
  interface of LandingPage RecentPost
*/
interface IlandingRecent {
  content: IPostRecentItems[];
}

/*
  interface of content from ILandingRecent
*/
interface IPostRecentItems {
  backgroundSource: string;
  title: string;
  date: string;
  type?: string;
}

/*
  interface of LandingPage Actu
*/
interface IActu {
  imageSource: string;
  title: string;
  subtitle: string;
  backgroundSource: string;
  genre: string;
  comeOutDate: string;
}

/*
  interface of LandingPage Footer
*/
interface ILandingFooter{
  leftSide:IleftSide
  mail: Imail
}

/*
  interface of LeftSide of ILandingFooter
*/
interface IleftSide{
  contactItems: IcontactItems[]
}

/*
  interface of contact items of IleftSide
*/
interface IcontactItems{
  iconfooter: IconProp,
  label: string,
}

/*
  interface of mail  of ILandingFooter
*/
interface Imail {
  emailInputPlaceHolder:string,
  textInputPlaceHolder:string,
  ButtonValue: string
}

//function arrayLandingData
export default function arrayLandingHelpers() {
  //Landing Navbar Object-ArrayData
  const navLandingData: InavLandingData = {
    logo: "/logo.webp",
    logo_title: `Otaku-<span>Vortex</span>`,
    hamburgerButton:faBars,
    navItems: [
      { label: "Accueil", href: "/", icon: faHome },
      { label: "Actualité", href: "", icon: faNewspaper },
      { label: "Découvrir", href: "", icon: faSearch },
      { label: "Contact", href: "", icon: faEnvelope },
    ],
    navButton: [
      { href: "", label: "Créer un compte" },
      { href: "", label: "Se connecter" },
    ],
  };

  //Landing Hero ObjectData
  const landingHeroData: IlandingHero = {
    backgroundSource: "/banner3.jpg",
    buttonIcon: faArrowRight,
    pictureSource: "/banner3.jpg",
  };

  //Landing Recent Object-ArrayData
  const landingRecentData: IlandingRecent = {
    content: [
      {
        backgroundSource: "/landing/black clover.jpg",
        date: "2023",
        title: `Black CLover : L'épée de l' Empereur mage`,
        type: "FILM",
      },
      {
        backgroundSource: "/landing/Jujutsu-Kaisen-saison3.jpg",
        date: "2023",
        title: `Jujutsu Kaisen : Saison 2`,
        type: "SERIE",
      },
      {
        backgroundSource: "/landing/demons-slayer-village-forgeron.jpg",
        date: "2023",
        title: `Demon Slayer: Kimetsu no Yaiba - Le Village des forgerons`,
        type: "SERIE",
      },
      {
        backgroundSource: "/landing/Vinland-saga-saison2.jpg",
        date: "2023",
        title: `Vinland Saga : Saison 2`,
        type: "SERIE",
      },
      {
        backgroundSource: "/landing/attack-on-titan.jpeg",
        date: "2023",
        title: `Attack on titan : Saison 4 Part 2`,
        type: "SERIE",
      },
      {
        backgroundSource: "/landing/one-piece.webp",
        date: "2023",
        title: `One piece: Apparition du Gear 5`,
        type: "SERIE",
      },
      {
        backgroundSource: "/landing/mashle-saison1.jpg",
        date: "2023",
        title: `Mashle :  Saison 1`,
        type: "SERIE",
      },
      {
        backgroundSource:
          "/landing/bleach_thousand_year_blood_war_the_separation.png",
        date: "2023",
        title: `BLeach Thousand Year Blood war the separation`,
        type: "SERIE",
      },
    ],
  };

  //Landing Actu ObjectData
  const LandingActuData: IActu = {
    imageSource: "/landing/Boruto-two-blue-vortex.jpg",
    genre: "Nouvele série de Boruto",
    comeOutDate: "21 Aôut 2023",
    subtitle: "Nekketsu, action, comédie, drame",
    title: "Boruto Blue Vortex",
    backgroundSource: "/landing/boruto-black.png",
  };

  //Landing Footer Object-ArrayData
  const LandingFooterData: ILandingFooter = {
    leftSide: {
      contactItems:[
        {label: "Hi Ro", iconfooter:faFacebook},
        {label: "loickemadesemadisson@gmail.com", iconfooter:faEnvelopeCircleCheck},
        {label: "Johan", iconfooter:faInstagram},
      ],
    },
    mail:{
      emailInputPlaceHolder:"Votre adresse email ...",
      textInputPlaceHolder:"Le contenu de l'email ...",
      ButtonValue:"Envoyer"
    }
  };

  //array and objetct Data exportation
  return {
    navLandingData,
    landingHeroData,
    landingRecentData,
    LandingActuData,
    LandingFooterData,
  };
}
