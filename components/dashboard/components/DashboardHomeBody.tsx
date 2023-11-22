import SuggestionCard from "./SuggestionCard";

interface Iprops {
  image: string;
}

const DashboardHomeBody: React.FC<Iprops> = ({ image }): JSX.Element => {
  return (
    <section className="dashboard-home-content">
      <div className="section-hero">
        <div className="row">
          <div className="col-5">
            <div className="section-hero__title">
              <h1>ONE PIECE </h1>
              <h5 className="mt-3">Episode 1073 , 1074</h5>
              <div className="lang">
                <div className="vostfr">
                  <p>VOSTFR</p>
                </div>
                <div className="vf">
                  <p>VF</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-7">
            <div className="section-hero__cover">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </div>

      <section className="section-suggestion mt-5">
        <div className="section-suggestion__title">
          <h5>Notre suggestion</h5>
        </div>

        <div className="section-suggestion__content mt-4">
          <SuggestionCard />
        </div>
      </section>
    </section>
  );
};

export default DashboardHomeBody;
