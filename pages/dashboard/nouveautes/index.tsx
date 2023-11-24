import PageHeading from "@/components/PageHeading";
import Layout from "@/provider/Layout";
import metaDataHelper from "@/helpers/metaDataHelper";
import HeaderBar from "@/components/dashboard/childrenComponents/HeaderBar";
import DashboardNewsBody from "@/components/dashboard/news/DashboardNewsBody";

const nouveautes = (): JSX.Element => {
  const { metaData } = metaDataHelper();
  return (
    <Layout>
      <PageHeading title={metaData.metaTitle.dashboardNews} />
      <section className="dashboard-news">
        <section className="dashboard-news__body">
          {/* =============Header with search-bar============ */}
          <HeaderBar />

           {/* =============Body============ */}
           <DashboardNewsBody/>
        </section>
      </section>
    </Layout>
  );
};

export default nouveautes;
