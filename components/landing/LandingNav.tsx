import React from "react";
import LandingNavItems from "./components/LandingNavItems";
import arrayLandingHelpers from "@/helpers/arrayLandingHelpers";
import LandingNavButton from "./components/LandingNavButton";
import LandingNavResponsive from "./components/LandingNavResponsive";
import { Fragment } from "react";
import MenuHamburger from "./components/MenuHamburger";
import { useNav } from "@/helpers/hooks/useNav";

interface Iaction {
  action: () => void;
}

const LandingNav = (): JSX.Element => {
  const { navLandingData } = arrayLandingHelpers();
  const { menuToogle } = useNav();
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
        <MenuHamburger
          action={() => {
            menuToogle()
          }}
        />
      </div>

      {/* =============Navbar toogle for responsive=========== */}
      <LandingNavResponsive />
    </Fragment>
  );
};

export default LandingNav;
