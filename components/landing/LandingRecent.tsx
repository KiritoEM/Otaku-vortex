import arrayLandingHelpers from "@/helpers/arrayLandingHelpers";
import LandingRecentContent from "./components/LandingRecentContent";

const LandingRecent = (): JSX.Element => {
  const { landingRecentData } = arrayLandingHelpers();
  return (
    <section className="landing-recent">
      <div className="landing-recent__container">
        <div className="section-header">
          <h3>{landingRecentData.title}</h3>
        </div>
        <LandingRecentContent />
      </div>
    </section>
  );
};

export default LandingRecent;
