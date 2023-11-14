import arrayLandingHelpers from "@/helpers/arrayLandingHelpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LandingHeroDescription = (): JSX.Element => {
    const {landingHeroData} = arrayLandingHelpers();
  return (
    <div className="section-description">
      <div className="title">
      <h1
          dangerouslySetInnerHTML={{ __html: landingHeroData.title }}
        />
      </div>
      <div className="description mt-4">
        <p>{landingHeroData.description}</p>
      </div>
      <div className="button mt-4">
         <button className="btn">{landingHeroData.buttonText} <FontAwesomeIcon icon={landingHeroData.buttonIcon} className="mx-2"/></button>
      </div>
    </div>
  );
};

export default LandingHeroDescription;
