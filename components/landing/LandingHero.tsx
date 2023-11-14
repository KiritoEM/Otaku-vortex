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
        <div className="row gx-5">
          <div className="col-6">
            <LandingHeroDescription />
          </div>

          <div className="col-6">
            <LandingHeroPictures />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
