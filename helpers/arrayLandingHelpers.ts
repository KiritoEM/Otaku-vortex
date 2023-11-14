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
  pictureSource: string
}

interface IlandingRecent {
  title: string; 
}

interface IPostRecentItems{
 
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
    title: "Animés récents",
  }

  return { navLandingData, landingHeroData, landingRecentData };
}
