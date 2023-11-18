import arrayLandingHelpers from "@/helpers/arrayLandingHelpers";
import AuthDataHelper from "@/helpers/AuthDataHelper";

const codeVerification = (): JSX.Element => {
  const { navLandingData } = arrayLandingHelpers();
  const { loginData } = AuthDataHelper();
  return (
    <section className="code-verification">
      <div className="code-verification__container">
        <div className="logo">
          <img src={navLandingData.logo} alt="" />
          <h4
            dangerouslySetInnerHTML={{ __html: navLandingData.logo_title }}
            className="mx-1"
          />
        </div>
        <div className="title mt-3">
          <h5>
            Nous avons envoyé un email contenant un code à 6 chiffres à l'
            adresse email : <span className="mx-3">" loickemadesemadisson@gmail.com"</span>
          </h5>
        </div>
        
        <div className="formulaire mt-5">
          <form action="post">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Entrez le code à 6 chiffres ..."
              />
            </div>
            <div className="button mt-4">
              <button type="submit" className="btn">
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default codeVerification;
