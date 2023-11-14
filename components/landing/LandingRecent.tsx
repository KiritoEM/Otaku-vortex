import arrayLandingHelpers from "@/helpers/arrayLandingHelpers";

const LandingRecent = (): JSX.Element => {
    const {landingRecentData} = arrayLandingHelpers();
    return (
      <section className="landing-recent">
        <div className="landing-recent__container">
          <div className="section-title">
            <h3>{landingRecentData.title}</h3>
          </div>
        </div>
      </section>
    );
};

export default LandingRecent;