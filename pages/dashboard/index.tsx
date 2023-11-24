import Layout from "@/provider/Layout";
import HeaderBar from "@/components/dashboard/childrenComponents/HeaderBar";
import PageHeading from "@/components/PageHeading";
import metaDataHelper from "@/helpers/metaDataHelper";
import DashboardHomeBody from "@/components/dashboard/home/DashboardHomeBody";
import dashboardDataHelper from "@/helpers/dashboardDataHelper";

const dashboardHome = (): JSX.Element => {
  const { dashboardHomeData } = dashboardDataHelper();
  const { metaData } = metaDataHelper();
  return (
    <Layout>
      <PageHeading title={metaData.metaTitle.dashboardHome} />
      <section className="dashboard-home">
        <section className="dashboard-home__body">
          {/* =============Header with search-bar============ */}
          <HeaderBar />

          {/* =============Body============ */}
          <DashboardHomeBody image={dashboardHomeData.img_src} />
        </section>
      </section>
    </Layout>
  );
};

export default dashboardHome;
