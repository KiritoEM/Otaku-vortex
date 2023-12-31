import blogHelpers from "@/helpers/blogHelpers";
import CardWithoutSwiper from "../childrenComponents/CardWithoutSwiper";
import { useCallback, useEffect, useState } from "react";
import SectionCoverProps from "../childrenComponents/SectionCoverProps";

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

const DashboardNewsBody = (): JSX.Element => {
  const [blogs, setBlogs] = useState<IBlogItem[]>([]);
  
  const { fetchBlogs } = blogHelpers();

  // Function to fetch recents blog
  const getRecentsBlogs = useCallback(async () => {
    try {
      let res = await fetchBlogs();
      let sortedBlogs = res.blog.sort((a: any, b: any) =>
      a.title.localeCompare(b.title)
    );
    setBlogs(sortedBlogs);
      console.log("blog obtenu: ", res.blog);
    } catch (error) {
      console.error("Erreur lors de la récupération des blogs", error);
    }
  }, [setBlogs]);

  useEffect(() => {
    getRecentsBlogs();
  }, [getRecentsBlogs]);

  const cover = {
    title: "Animés Récents",
    cover: "/news-cover.png",
  };

  return (
    <section className="dashboard-news-content">
      <SectionCoverProps {...cover} />
      <div className="section-content mt-2">
        <div className="row gx-4 gy-4">
          {blogs &&
            blogs.map((blogItem) => (
              <CardWithoutSwiper blogId={blogItem._id} key={blogItem._id} {...blogItem} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardNewsBody;
