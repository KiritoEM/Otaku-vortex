import arrayLandingHelpers from "@/helpers/arrayLandingHelpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { useNav } from "@/hooks/useNav";

const LandingNavResponsive = (): JSX.Element => {
  const { navLandingData } = arrayLandingHelpers();
  const router = useRouter();
  const { openMenu, openOverlay } = useNav();
  return (
    <Fragment>
      <div
        className={`nav__responsive d-flex d-lg-none ${
          openMenu ? "openMenu" : "closeMenu"
        }`}
      >
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

          <li>
            <div className="button">
              {navLandingData.navButton.map((items, index) => (
                <button
                  className="btn"
                  key={index}
                  onClick={() => {
                    router.push(`${items.href}`);
                  }}
                >
                  {items.label}
                </button>
              ))}
            </div>
          </li>
        </ul>
      </div>

      {/* =============overlay page for menu toogle============ */}
      {openOverlay && <div className="overlay d-fles d-lg-none"></div>}
    </Fragment>
  );
};

export default LandingNavResponsive;
