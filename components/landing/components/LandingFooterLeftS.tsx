import arrayLandingHelpers from "@/helpers/arrayLandingHelpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LandingFooterLeftS = () : JSX.Element  => {
    const {LandingFooterData} = arrayLandingHelpers()
    return (
      <div className="col-7">
        <div className="section-left-side">
          <div className="title">
            <div className="circle"></div>
            <h4>Nous contacter</h4>
          </div>
          <div className="line"></div>
          <div className="contact-items">
            {LandingFooterData.leftSide.contactItems.map((item, index) => (
              <div className="items" key={index}>
                <p>
                  <FontAwesomeIcon
                    icon={item.iconfooter}
                    className="mx-1 icon"
                  />{" "}
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default LandingFooterLeftS;