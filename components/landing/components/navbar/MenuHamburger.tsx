import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import arrayLandingHelpers from "@/helpers/arrayLandingHelpers";

interface Iaction {
  action: () => void;
}

const MenuHamburger: React.FC<Iaction> = ({ action }): JSX.Element => {
  const { navLandingData } = arrayLandingHelpers();
  return (
    <div className="hamburgerButton d-flex d-lg-none" onClick={action}>
      <FontAwesomeIcon
        icon={navLandingData.hamburgerButton}
        className="icon-burger"
        onClick={action}
      />
    </div>
  );
};

export default MenuHamburger;
