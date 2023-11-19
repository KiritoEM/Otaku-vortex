import arrayLandingHelpers from "@/helpers/arrayLandingHelpers";
import { useRouter } from "next/router";

const LandingNavButton = (): JSX.Element => {
  const { navLandingData } = arrayLandingHelpers();
  const router = useRouter();

  return (
    <div className="nav__button d-none d-lg-flex">
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
  );
};

export default LandingNavButton;
