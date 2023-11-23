import PageHeading from "@/components/PageHeading";
import Layout from "@/provider/Layout";
import metaDataHelper from "@/helpers/metaDataHelper";
import DashboardListBody from "@/components/dashboard/components/DashboardListBody";
import HeaderBar from "@/components/dashboard/components/HeaderBar";

const liste = (): JSX.Element => {
  const { metaData } = metaDataHelper();
  return (
    <Layout>
      <PageHeading title={metaData.metaTitle.dashboardNews} />
      <section className="dashboard-list">
        <section className="dashboard-list__body">
          {/* =============Header with search-bar============ */}
          <HeaderBar />

          {/* =============Body============ */}
          <DashboardListBody />
        </section>
      </section>
    </Layout>
  );
};

export default liste;
