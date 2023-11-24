import React from "react";
import arrayLandingHelpers from "@/helpers/arrayLandingHelpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

const LandingNavItems = (): JSX.Element => {
  const { navLandingData } = arrayLandingHelpers();
  const router = useRouter();
  return (
    <div className="nav__items  d-none d-lg-flex">
      <ul>
        {navLandingData.navItems.map((items, index) => (
          <li key={index}>
            <a
              href={`${items.href}`}
              className={router.pathname === items.href ? "active" : ""}
            >
              {items.icon !== undefined && (
                <FontAwesomeIcon icon={items.icon} className="mx-2" />
              )}

              {items.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LandingNavItems;
