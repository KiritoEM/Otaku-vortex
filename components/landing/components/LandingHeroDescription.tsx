import arrayLandingHelpers from "@/helpers/arrayLandingHelpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LandingHeroDescription = (): JSX.Element => {
    const {landingHeroData} = arrayLandingHelpers();
  return (
    <div className="col-md-7 col-lg-6">
      <div className="section-description">
        <div className="title">
          <h1>
            Bienvenue sur <span>Otaku-Vortex</span>
          </h1>
        </div>
        <div className="description mt-3 mt-md-4">
          <p>
            Une communauté dédiée aux passionnés d'animes et de la culture
            otaku. Rejoignez-nous pour découvrir, discuter et partager votre
            amour pour les animés.
          </p>
        </div>
        <div className="button mt-3 mt-md-4">
          <button className="btn">
            Rejoindre la communauté
            <FontAwesomeIcon
              icon={landingHeroData.buttonIcon}
              className="mx-2"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingHeroDescription;
