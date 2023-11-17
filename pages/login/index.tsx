import LoginForm from "@/components/login/LoginForm";
import LoginCover from "@/components/login/LoginCover";
import metaDataHelper from "@/helpers/metaDataHelper";

const login = (): JSX.Element => {
  const {} = metaDataHelper();
  return (
    <section className="login">
      <div className="login__container">
        <div className="row gx-5">
          <LoginForm />
          <LoginCover />
        </div>
      </div>
    </section>
  );
};

export default login;
