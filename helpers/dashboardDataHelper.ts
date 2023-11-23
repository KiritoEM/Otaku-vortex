import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
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
  lottie_src: string
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
 interface IdashboardHome{
   img_src: string;
   biblioIcon: IconProp
 }

export default function dashboardDataHelper() {
  const dashboardNav: IdashboardNav = {
    logo: "/logo.webp",
    logo_title: `Otaku-<span>Vortex</span>`,
    hamburgerButton: faBars,
    navItems: [
      { label: "Accueil", href: "/dashboard", icon: faHome },
      { label: "Nouveautés", href: "/dashboard/nouveautes", icon: faNewspaper },
      { label: "Liste", href: "/dashboard/liste", icon: faSearch },
      { label: "Catégories", href: "", icon: faSearch },
    ],
    lottie_src:`https://lottie.host/3be45a85-3401-47f4-9c4b-d73bbac14517/SRDaAssHCk.json`,
  };

  const dashboardHomeData: IdashboardHome= {
    img_src:"/one-piece.jpg",
    biblioIcon : faTelevision
  }

  return {
    dashboardNav,
    dashboardHomeData
  };
}
