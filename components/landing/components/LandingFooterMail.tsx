import arrayLandingHelpers from "@/helpers/arrayLandingHelpers";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Iprops {
  handleSubmit: (e: any) => void;
}

const LandingFooterMail: React.FC<Iprops> = ({ handleSubmit }): JSX.Element => {
  const { LandingFooterData } = arrayLandingHelpers();
  return (
    <div className="col-5">
      <div className="section-mail">
        <div className="title">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <h4>Nous envoyer un email</h4>
        </div>
        <div className="line2"></div>
        <div className="formulaire">
          <form action="post" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
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
                name="emailValue"
                placeholder={`${LandingFooterData.mail.textInputPlaceHolder}`}
              />
            </div>
            <div className="button mt-4">
              <button type="submit" className="btn">
                {LandingFooterData.mail.ButtonValue}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingFooterMail;
