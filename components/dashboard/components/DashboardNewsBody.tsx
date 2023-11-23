import blogHelpers from "@/helpers/blogHelpers";
import CardWithoutSwiper from "./CardWithoutSwiper";
import { useCallback, useEffect, useState } from "react";
import SectionCoverProps from "./SectionCoverProps";

interface IBlogItem {
  cover: string;
  date: string;
  episodes: number;
  genre: string;
  title: string;
  Synopsis: string;
  typeAffichage: string[];
  type_anime: string
  _id: string;
}

const DashboardNewsBody = (): JSX.Element => {
  const [blogs, setBlogs] = useState<IBlogItem[]>([]);
  if (blogs) {
    console.log("blogs", blogs);
  }
  const { fetchBlogs } = blogHelpers();

  // Function to fetch recents blog
  const getRecentsBlogs = useCallback(async () => {
    try {
      let res = await fetchBlogs();
      let recentBlogs = res.blog.filter((blogItem: IBlogItem) =>
        blogItem.typeAffichage.includes("recent")
      );
      setBlogs(recentBlogs);
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
              <CardWithoutSwiper key={blogItem._id} {...blogItem} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardNewsBody;
