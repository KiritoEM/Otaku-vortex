import arrayLandingHelpers from "@/helpers/arrayLandingHelpers";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LandingFooterMail = (): JSX.Element => {
  const { LandingFooterData } = arrayLandingHelpers();
  return (
    <div className="col-5">
      <div className="section-mail">
        <div className="title">
        <FontAwesomeIcon icon={faEnvelope} className="icon"/>
          <h4>{LandingFooterData.mail.title}</h4>
        </div>
        <div className="line2"></div>
        <div className="formulaire">
        <form action="post">
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder={`${LandingFooterData.mail.emailInputPlaceHolder}`}
            />
          </div>
          <div className="form-group mt-4">
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder={`${LandingFooterData.mail.textInputPlaceHolder}`}
            />
          </div>
          <div className="button mt-4">
            <button type="submit" className="btn">
              Se connecter
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default LandingFooterMail;
