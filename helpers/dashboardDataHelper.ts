import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faChevronLeft,
  faChevronRight,
  faEnvelope,
  faHome,
  faNewspaper,
  faSearch,
  faTelevision,
} from "@fortawesome/free-solid-svg-icons";

interface IdashboardNav {
  logo: string;
  logo_title: string;
  navItems: InavItems[];
  hamburgerButton: IconProp;
  lottie_src: string;
}

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
interface IdashboardHome {
  img_src: string;
  biblioIcon: IconProp;
  chevronRightIcon: IconProp;
  chevronLeftIcon: IconProp;
}

/*
    interface of dashboardCategory
  */
    interface IdashboardCategory {
      button_value: string
    }
    
export default function dashboardDataHelper() {
  const dashboardNav: IdashboardNav = {
    logo: "/logo.webp",
    logo_title: `Otaku-<span>Vortex</span>`,
    hamburgerButton: faBars,
    navItems: [
      { label: "Accueil", href: "/dashboard", icon: faHome },
      { label: "Récents", href: "/dashboard/nouveautes", icon: faNewspaper },
      { label: "Liste", href: "/dashboard/liste", icon: faSearch },
      { label: "Catégories", href: "/dashboard/categories", icon: faSearch },
    ],
    lottie_src: `https://lottie.host/3be45a85-3401-47f4-9c4b-d73bbac14517/SRDaAssHCk.json`,
  };

  const dashboardHomeData: IdashboardHome = {
    img_src: "/one-piece.jpg",
    biblioIcon: faTelevision,
    chevronLeftIcon: faChevronLeft,
    chevronRightIcon: faChevronRight,
  };

  const dashboardCategoryData: IdashboardCategory[] = [
    { button_value: "Tous" },
    { button_value: "Action" },
    { button_value: "Comédie" },
    { button_value: "Surnaturel" },
    { button_value: "Aventure" },
    { button_value: "Fantasy" },
    { button_value: "Romance" },
    { button_value: "Mystère" },
    { button_value: "Animation" },
    { button_value: "Fantastique" },
    { button_value: "Drame" },
    { button_value: "Historique" },
    { button_value: "Horreur" },
    { button_value: "Ecchi" },
    { button_value: "tranche de vie" },
    { button_value: "Psychologie" },
    { button_value: "tragédie" },
    { button_value: "Science-fiction" },
    { button_value: "Seinen" },
    { button_value: "Shōnen" },
    { button_value: "Thriller" },
  ];


  return {
    dashboardNav,
    dashboardHomeData,
    dashboardCategoryData
  };
}
