import LandingFooterLeftS from "./components/LandingFooterLeftS";
import LandingFooterMail from "./components/LandingFooterMail";

const LandingFooter = (): JSX.Element => {
  return (
    <section className="landing-footer">
      <div className="landing-footer__container">
        <div className="row g-5">
          <LandingFooterLeftS />
          <LandingFooterMail />
        </div>
      </div>
    </section>
  );
};

export default LandingFooter;
