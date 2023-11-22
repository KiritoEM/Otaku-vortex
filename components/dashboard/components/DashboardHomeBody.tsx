const DashboardHomeBody = (): JSX.Element => {
  return (
    <section className="dashboard-home-content">
      <div className="section-hero">
        <div className="row">
          <div className="col-6">
            <div className="section-hero__title">
              <h2>ONE PIECE </h2>
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

          <div className="col-6">
            <div className="section-hero__cover">
              <img src="/banner.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardHomeBody;
