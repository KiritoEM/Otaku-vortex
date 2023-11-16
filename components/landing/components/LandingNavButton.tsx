import arrayLandingHelpers from "@/helpers/arrayLandingHelpers";
const LandingNavButton = (): JSX.Element => {
  const { navLandingData } = arrayLandingHelpers();
  return (
    <div className="nav__button d-none d-lg-flex">
      {navLandingData.navButton.map((items, index) => (
        <button className="btn" key={index}>
          {items.label}
        </button>
      ))}
    </div>
  );
};

export default LandingNavButton;
