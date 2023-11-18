import LoginForm from "@/components/login/LoginForm";
import LoginCover from "@/components/login/LoginCover";
import metaDataHelper from "@/helpers/metaDataHelper";
import PageHeading from "@/components/PageHeading";
import { Fragment } from "react";

const login = (): JSX.Element => {
  const { metaData } = metaDataHelper();
  return (
    <Fragment>
      <PageHeading title={metaData.metaTitle.loginTitle} />
      <section className="login">
        <div className="login__container">
          <div className="row gx-5">
            <LoginForm />
            <LoginCover />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default login;
