import PageHeading from "@/components/PageHeading";
import Layout from "@/provider/Layout";
import metaDataHelper from "@/helpers/metaDataHelper";
import HeaderBar from "@/components/dashboard/childrenComponents/HeaderBar";
import DashboardCategoryBody from "@/components/dashboard/category/DashboardCategoryBody";

const nouveautes = (): JSX.Element => {
  const { metaData } = metaDataHelper();
  return (
    <Layout>
      <PageHeading title={metaData.metaTitle.dashboardCategory} />
      <section className="dashboard-category">
        <div className="dashboard-category__body">
          {/* =============Header with search-bar============ */}
          <HeaderBar />

          {/* =============Body============ */}
          <DashboardCategoryBody />
        </div>
      </section>
    </Layout>
  );
};

export default nouveautes;
