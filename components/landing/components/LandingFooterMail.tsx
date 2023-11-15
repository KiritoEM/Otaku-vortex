import arrayLandingHelpers from "@/helpers/arrayLandingHelpers";

const LandingFooterMail = (): JSX.Element => {
  const { LandingFooterData } = arrayLandingHelpers();
  return (
    <div className="col-5">
      <div className="section-mail">
        <div className="title">
          <div className="circle"></div>
          <h4>{LandingFooterData.mail.title}</h4>
        </div>
        <div className="formulaire">
             <form action="">
                 
             </form>
        </div>
      </div>
    </div>
  );
};

export default LandingFooterMail;
