import arrayLandingHelpers from "@/helpers/arrayLandingHelpers";

const LandingHeroPictures = (): JSX.Element => {
    const {landingHeroData} = arrayLandingHelpers()
  return (
    <div className="col-6">
      <div className="section-pictures">
        <img src={landingHeroData.pictureSource} alt="" />
      </div>
    </div>
  );
};

export default LandingHeroPictures;
