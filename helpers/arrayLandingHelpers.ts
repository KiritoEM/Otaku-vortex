import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRight,
  faEnvelope,
  faHome,
  faNewspaper,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

type InavLandingData = {
  logo: string;
  logo_title: string;
  navItems: InavItems[];
  navButton: InavButton[];
};

interface InavItems {
  label: string;
  icon?: IconProp;
  href: string;
}

interface InavButton {
  label: string;
  href: string;
}

interface IlandingHero {
  backgroundSource: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  buttonIcon: IconProp;
  pictureSource: string;
}

interface IlandingRecent {
  title: string;
  content: IPostRecentItems[];
}

interface IPostRecentItems {
  backgroundSource: string;
  title: string;
  date: string;
  type?: string;
}

interface IActu{
  imageSource: string,
  title: string,
  description :string,
  subtitle: string,
  backgroundSource: string
}


export default function arrayLandingHelpers() {
  const navLandingData: InavLandingData = {
    logo: "/logo.webp",
    logo_title: `Otaku-<span>Vortex</span>`,
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

  const landingHeroData: IlandingHero = {
    backgroundSource: "/banner3.jpg",
    title: `Bienvenue sur <span>Otaku-Vortex</span>`,
    description:
      "Une communauté dédiée aux passionnés d'animes et de la culture otaku. Rejoignez-nous pour découvrir, discuter et partager votre amour pour les animés.",
    buttonText: "Rejoindre la communauté",
    buttonLink: "/lien-du-bouton",
    buttonIcon: faArrowRight,
    pictureSource: "/banner3.jpg",
  };

  const landingRecentData: IlandingRecent = {
    title: "Animés récents et populaires",
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
        backgroundSource: "/landing/bleach_thousand_year_blood_war_the_separation.png",
        date: "2023",
        title: `BLeach Thousand Year Blood war the separation`,
        type: "SERIE",
      },
    ],
  };

  const LandingActuData: IActu= {
    imageSource:"/landing/Boruto-two-blue-vortexjpg",
    description:"",
    subtitle: "Nekketsu, action, comédie, drame",
    title:"Boruto Blue Vortex",
    backgroundSource:"/landing/Boruto-two-blue-vortexjpg"
  }

  return { navLandingData, landingHeroData, landingRecentData , LandingActuData};
}
