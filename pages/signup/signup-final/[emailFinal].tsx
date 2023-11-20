import { useRouter } from "next/router";
import PageHeading from "@/components/PageHeading";
import metaDataHelper from "@/helpers/metaDataHelper";
import arrayLandingHelpers from "@/helpers/arrayLandingHelpers";
import AuthDataHelper from "@/helpers/AuthDataHelper";
import { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthHelper from "@/helpers/AuthHelper";
import axios from "axios";

const inscripitonfinal = (): JSX.Element => {
  const { metaData } = metaDataHelper();
  const { navLandingData } = arrayLandingHelpers();
  const { signupData } = AuthDataHelper();
  const router = useRouter();
  const { emailFinal } = router.query;
  const { postSignup } = AuthHelper();
  // const [userEmail, setUserEmail] = useState<string>("");

  return (
    <Fragment>
      <PageHeading title={metaData.metaTitle.signupFinal} />
      <div className="inscription-final">
        <div className="inscription-final__container">
          <div className="logo">
            <img src={navLandingData.logo} alt="" />
            <h4
              dangerouslySetInnerHTML={{ __html: navLandingData.logo_title }}
              className="mx-1"
            />
          </div>
          <div className="title mt-3">
            <h2>Finalisez votre inscription</h2>
          </div>

          <div className="formulaire mt-5">
            <form
              action="post"
              onSubmit={(e: any) => {
                postSignup(e, emailFinal as string);
              }}
            >
              <div className="form-group">
                <label htmlFor="">
                  <FontAwesomeIcon
                    icon={signupData.nameIcon}
                    className="mx-2"
                  />
                  {signupData.namelabel}
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  aria-describedby="emailHelp"
                  placeholder={`${signupData.userNamePlaceholder}`}
                />
              </div>
              <div className="form-group mt-4">
                <label htmlFor="">
                  <FontAwesomeIcon
                    icon={signupData.passwordIcon}
                    className="mx-2"
                  />
                  {signupData.passwordlabel}
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="password"
                  aria-describedby="emailHelp"
                  placeholder={`${signupData.passwordPlaceholder}`}
                />
              </div>
              <div className="button mt-5">
                <button type="submit" className="btn">
                  Créer un compte
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default inscripitonfinal;
