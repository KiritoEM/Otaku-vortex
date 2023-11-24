import arrayLandingHelpers from "@/helpers/arrayLandingHelpers";

const LandingHeroPictures = (): JSX.Element => {
    const {landingHeroData} = arrayLandingHelpers()
  return (
    <div className="col-md-5 col-lg-6">
      <div className="section-pictures">
        <img src={landingHeroData.pictureSource} alt="" />
      </div>
    </div>
  );
};

export default LandingHeroPictures;
