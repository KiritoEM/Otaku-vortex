import arrayLandingHelpers from "@/helpers/arrayLandingHelpers";
import LandingRecentContent from "./components/Recent/LandingRecentContent";

const LandingRecent = (): JSX.Element => {
  const { landingRecentData } = arrayLandingHelpers();
  return (
    <section className="landing-recent">
      <div className="landing-recent__container">
        {/* =============section-header============ */}
        <div className="section-header">
          <h3>Animés récents et populaires</h3>
        </div>

        {/* =============section-content============ */}
        <LandingRecentContent />
      </div>
    </section>
  );
};

export default LandingRecent;
