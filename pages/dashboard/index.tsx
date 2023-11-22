import Layout from "@/provider/Layout";
import HeaderBar from "@/components/dashboard/components/HeaderBar";

const dashboardHome = () => {
  return (
    <Layout>
      <section className="dashboard-home">
        <section className="dashboard-home__body">
        {/* =============Header with search-bar============ */}
          <HeaderBar />
        </section>
      </section>
    </Layout>
  );
};

export default dashboardHome;
