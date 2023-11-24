import HeaderBar from "@/components/dashboard/childrenComponents/HeaderBar";
import Layout from "@/provider/Layout";
import BlogBody from "@/components/dashboard/blog/blogBody";

const blog = (): JSX.Element => {
  return (
    <Layout>
      <section className="blog">
        {/* =============Header with search-bar============ */}
        <HeaderBar />

        {/* =============BODY============ */}
        <BlogBody />
      </section>
    </Layout>
  );
};

export default blog;
