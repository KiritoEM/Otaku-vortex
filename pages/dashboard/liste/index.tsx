import PageHeading from "@/components/PageHeading";
import Layout from "@/provider/Layout";
import metaDataHelper from "@/helpers/metaDataHelper";
import HeaderBar from "@/components/dashboard/components/HeaderBar";
import DashboardListBody from "@/components/dashboard/components/DashboardListBody";

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
