import CardWithoutSwiper from "./CardWithoutSwiper";

const DashboardNewsBody = (): JSX.Element => {
  return (
    <section className="dashboard-news-content">
      <div className="section-cover">
        <div className="title">
          <h1>Animés Récents</h1>
        </div>
      </div>

      <div className="section-content mt-2">
        <div className="row gx-4 gy-4">
            <CardWithoutSwiper/>
            <CardWithoutSwiper/>
            <CardWithoutSwiper/>
            <CardWithoutSwiper/>
        </div>
      </div>
    </section>
  );
};

export default DashboardNewsBody;
