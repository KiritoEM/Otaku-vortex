import LandingRecentCard from "./LandingRecentCard";
import arrayLandingHelpers from "@/helpers/arrayLandingHelpers";

const LandingRecentContent = (): JSX.Element  => {
  const { landingRecentData } = arrayLandingHelpers();
  return (
    <div className="section-content mt-5">
      <div className="row g-4">
        {landingRecentData.content.map((item, index) => (
          <LandingRecentCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default LandingRecentContent;
