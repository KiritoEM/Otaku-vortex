import arrayLandingHelpers from "@/helpers/arrayLandingHelpers";
import LandingRecentContent from "./components/LandingRecentContent";

const LandingRecent = (): JSX.Element => {
  const { landingRecentData } = arrayLandingHelpers();
  return (
    <section className="landing-recent">
      <div className="landing-recent__container">
        {/* =============section-header============ */}
        <div className="section-header">
          <h3>{landingRecentData.title}</h3>
        </div>

        {/* =============section-content============ */}
        <LandingRecentContent />
      </div>
    </section>
  );
};

export default LandingRecent;
