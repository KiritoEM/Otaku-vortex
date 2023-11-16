import LandingFooterLeftS from "./components/LandingFooterLeftS";
import LandingFooterMail from "./components/LandingFooterMail";
import EmailAPI from "@/pages/api/EmailAPI";

const LandingFooter = (): JSX.Element => {
  const handleSubmit = (e: any) => {
    EmailAPI("", e);
  };
  return (
    <section className="landing-footer">
      <div className="landing-footer__container">
        <div className="row g-5">
          {/* =============section--leftSide-contact============ */}
          <LandingFooterLeftS />

          {/* =============section-mailer============ */}
          <LandingFooterMail handleSubmit={handleSubmit} />
        </div>
      </div>
    </section>
  );
};

export default LandingFooter;
