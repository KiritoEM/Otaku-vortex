import AuthDataHelper from "@/helpers/AuthDataHelper";

const LoginCover = (): JSX.Element => {
  const {loginData} = AuthDataHelper()
    return (
      <div className="col-md-6 d-none d-lg-flex">
        <div className="section-cover">
          <img src={loginData.cover_src} alt="" />
        </div>
      </div>
    );
};

export default LoginCover;