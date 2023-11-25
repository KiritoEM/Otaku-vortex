import HeaderBar from "@/components/dashboard/childrenComponents/HeaderBar";
import Layout from "@/provider/Layout";
import BlogBody from "@/components/dashboard/blog/blogBody";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import userHelpers from "@/helpers/userHelpers";
import blogHelpers from "@/helpers/blogHelpers";

interface IBlogItem {
  Synopsis: string;
  cover: string;
  date: string;
  episodes: string;
  genre: string;
  title: string;
  typeAffichage: string[];
  type_anime: string;
  _id: string;
  Status: string;
}

const blog = (): JSX.Element => {
  const router = useRouter();
  const { fetchBlogs } = blogHelpers();
  const { blogId } = router.query;
  const [blogs, setBlogs] = useState<IBlogItem[]>([]);

  useEffect(() => {
    const getBlog = async () => {
      try {
        let res = await fetchBlogs();
        const blogFiltered = res.blog.find((item: any) => item._id === blogId);
        setBlogs(blogFiltered);
        console.log(blogFiltered);
      } catch (error) {
        console.error("Erreur lors de la récupération des blogs", error);
      }
    };

    getBlog();
  }, [setBlogs, blogId]);

  return (
    <Layout>
      <section className="blog">
        {/* =============Header with search-bar============ */}
        <HeaderBar />

        {/* =============BODY============ */}
        {blogs && <BlogBody {...blogs} />}
      </section>
    </Layout>
  );
};

export default blog;
