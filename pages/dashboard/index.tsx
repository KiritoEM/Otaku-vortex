import Layout from "@/provider/Layout";
import HeaderBar from "@/components/dashboard/components/HeaderBar";
import PageHeading from "@/components/PageHeading";
import metaDataHelper from "@/helpers/metaDataHelper";
import DashboardHomeBody from "@/components/dashboard/components/DashboardHomeBody";

const dashboardHome = (): JSX.Element => {
  const { metaData } = metaDataHelper();
  return (
    <Layout>
      <PageHeading title={metaData.metaTitle.dashboardHome} />
      <section className="dashboard-home">
        <section className="dashboard-home__body">
          {/* =============Header with search-bar============ */}
          <HeaderBar />

          {/* =============Body============ */}
          <DashboardHomeBody />
        </section>
      </section>
    </Layout>
  );
};

export default dashboardHome;
