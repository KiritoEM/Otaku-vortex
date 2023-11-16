import LandingNavItems from "./components/LandingNavItems";
import arrayLandingHelpers from "@/helpers/arrayLandingHelpers";
import LandingNavButton from "./components/LandingNavButton";
import LandingNavResponsive from "./components/LandingNavResponsive";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LandingNav = (): JSX.Element => {
  const { navLandingData } = arrayLandingHelpers();
  return (
    <Fragment>
      <div className="nav__container">
        {/* =============Navbar logo============ */}
        <div className="nav__logo">
          <img src={navLandingData.logo} alt="" />
          <h4
            dangerouslySetInnerHTML={{ __html: navLandingData.logo_title }}
            className="mx-1"
          />
        </div>

        {/* =============Navbar Menu Items============ */}
        <LandingNavItems />

        {/* =============Navbar Menu Authentification Button============ */}
        <LandingNavButton />

        {/* =============hamburger icon for menu toogle============ */}
        <div className="hamburgerButton d-flex d-lg-none">
           <FontAwesomeIcon icon={navLandingData.hamburgerButton} className="icon-burger"/>
        </div>
      </div>

      {/* =============Navbar toogle for responsive=========== */}
      <LandingNavResponsive />
    </Fragment>
  );
};

export default LandingNav;
