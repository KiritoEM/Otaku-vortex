import arrayLandingHelpers from "@/helpers/arrayLandingHelpers";
import AuthDataHelper from "@/helpers/AuthDataHelper";
import React from "react";
import AuthHelper from "@/helpers/AuthHelper";

const LoginForm = (): JSX.Element => {
  const { navLandingData } = arrayLandingHelpers();
  const { loginData } = AuthDataHelper();
  const { postLogin } = AuthHelper();
  return (
    <div className="col-lg-6">
      <div className="section-form">
        <div className="section-form__container">
          <div className="logo">
            <img src={navLandingData.logo} alt="" />
            <h4
              dangerouslySetInnerHTML={{ __html: navLandingData.logo_title }}
              className="mx-1"
            />
          </div>

          <div className="title">
            <h2>Rejoignez-nous en vous connectant</h2>
          </div>

          <div className="formulaire">
            <form
              action="post"
              onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                postLogin(e);
              }}
            >
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder={`${loginData.emailPlaceholder}`}
                />
              </div>
              <div className="form-group mt-4">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  placeholder={`${loginData.PasswordPlaceholder}`}
                />
              </div>
              <div className="button mt-5">
                <button type="submit" className="btn">
                  Se connecter
                </button>
              </div>
            </form>
          </div>

          <div className="authGoogle">
            <p>OU</p>
            <button className="btn">
              {" "}
              <img src={loginData.google_img} className="mx-2" alt="" />{" "}
              Continuer avec Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
