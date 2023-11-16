import arrayLandingHelpers from "@/helpers/arrayLandingHelpers";
import LandingHeroDescription from "./components/LandingHeroDescription";
import LandingHeroPictures from "./components/LandingHeroPictures";

const LandingHero = (): JSX.Element => {
  const { landingHeroData } = arrayLandingHelpers();
  return (
    <section className="landing-hero">
      <div
        className="landing-hero__cover"
        style={{
          backgroundImage: `url("${landingHeroData.backgroundSource}")`,
        }}
      >
        <div className="row gy-4 gx-0 gx-md-3 gx-lg-5 gy-md-1">
          {/* =============section-description============ */}
          <LandingHeroDescription />

          {/* =============section-picture============ */}
          <LandingHeroPictures />
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
