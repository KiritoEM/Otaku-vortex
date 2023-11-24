import arrayLandingHelpers from "@/helpers/arrayLandingHelpers";

const LandingActuPictures = (): JSX.Element => {
    const {LandingActuData} = arrayLandingHelpers()
    return (
        <div className="col-5 d-none d-lg-flex">
             <div className="section-picture">
                 <img src={LandingActuData.imageSource} alt="" />
             </div>
        </div>
    );
};

export default LandingActuPictures;