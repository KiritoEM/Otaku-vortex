import LandingActuDescription from "./components/Actu/LandingActuDescription";
import arrayLandingHelpers from "@/helpers/arrayLandingHelpers";
import LandingActuPictures from "./components/Actu/LandingActuPictures";

const LandingActu = (): JSX.Element => {
  const { LandingActuData } = arrayLandingHelpers();
  return (
    <section className="landing-actu">
      <div
        className="landing-actu__container"
        style={{
          backgroundImage: `url("${LandingActuData.backgroundSource}")`,
        }}
      >
        <div className="row">
          {/* =============section-description============ */}
          <LandingActuDescription />

          {/* =============section-picture============ */}
          <LandingActuPictures />
        </div>
      </div>
    </section>
  );
};

export default LandingActu;
