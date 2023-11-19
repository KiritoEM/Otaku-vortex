import arrayLandingHelpers from "@/helpers/arrayLandingHelpers";
import AuthDataHelper from "@/helpers/AuthDataHelper";
import metaDataHelper from "@/helpers/metaDataHelper";
import { Fragment } from "react";
import PageHeading from "@/components/PageHeading";
import AuthHelper from "@/helpers/AuthHelper";
import { useRouter } from "next/router";

const codeVerification = (): JSX.Element => {
  const { navLandingData } = arrayLandingHelpers();
  const { loginData } = AuthDataHelper();
  const { metaData } = metaDataHelper();
  const router = useRouter();
  const { email } = router.query;
  const { postCode } = AuthHelper();

  return (
    <Fragment>
      <PageHeading title={metaData.metaTitle.codeVerification} />
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
              adresse email : <span className="mx-3">"{email}"</span>
            </h5>
          </div>

          <div className="formulaire mt-5">
            <form
              action="post"
              onSubmit={(e: any) => {
                e.preventDefault();
                postCode(e);
              }}
            >
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="code"
                  id="exampleInputCODE1"
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
    </Fragment>
  );
};

export default codeVerification;
