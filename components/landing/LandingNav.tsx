import LandingNavItems from "./components/LandingNavItems";
import arrayLandingHelpers from "@/helpers/arrayLandingHelpers";
import LandingNavButton from "./components/LandingNavButton";

const LandingNav = (): JSX.Element => {
  const { navLandingData } = arrayLandingHelpers();
  return (
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

      {/* =============Navbar Menu Auth============ */}
      <LandingNavButton />
    </div>
  );
};

export default LandingNav;
