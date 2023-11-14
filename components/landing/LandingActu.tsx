import LandingActuDescription from "./components/LandingActuDescription";
import arrayLandingHelpers from "@/helpers/arrayLandingHelpers";
import LandingActuPictures from "./components/LandingActuPictures";

const LandingActu = (): JSX.Element => {
  const { LandingActuData } = arrayLandingHelpers();
  return (
    <section className="landing-actu">
      <div
        className="landing-actu__container"
      >
        <div className="row">
          <LandingActuDescription />
          <LandingActuPictures />
        </div>
      </div>
    </section>
  );
};

export default LandingActu;
