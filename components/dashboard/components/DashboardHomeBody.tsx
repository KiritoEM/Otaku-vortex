import { useCallback, useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import blogHelpers from "@/helpers/blogHelpers";

interface Iprops {
  image: string;
}

interface IBlogItem {
  Synopsis: string;
  cover: string;
  date: string;
  episodes: number;
  genre: string;
  title: string;
  typeAffichage: string[];
  type_anime: string;
  _id: string;
  Status: string
}

const DashboardHomeBody: React.FC<Iprops> = ({ image }): JSX.Element => {
  const [blogs, setBlogs] = useState<IBlogItem[]>([]);
  if (blogs) {
    console.log("blogs", blogs);
  }
  const { fetchBlogs } = blogHelpers();

  // Function to fetch populate blog
  const getPopularBlogs = useCallback(async () => {
    try {
      let res = await fetchBlogs();
      let popularBlogs = res.blog.filter((blogItem: IBlogItem) =>
        blogItem.typeAffichage.includes("populaire")
      );
      setBlogs(popularBlogs);
      console.log("blog obtenu: ", res.blog);
    } catch (error) {
      console.error("Erreur lors de la récupération des blogs", error);
    }
  }, [setBlogs]);

  useEffect(() => {
    getPopularBlogs();
  }, [getPopularBlogs]);

  return (
    <section className="dashboard-home-content">
      <div className="section-hero">
        <div className="row">
          <div className="col-5">
            <div className="section-hero__title">
              <h1>ONE PIECE </h1>
              <h5 className="mt-3">Episode 1073 , 1074</h5>
              <h5>Date de sortie : Juillet 2023</h5>
              <div className="lang">
                <div className="vostfr">
                  <p>VOSTFR</p>
                </div>
                <div className="vf">
                  <p>VF</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-7">
            <div className="section-hero__cover">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </div>

      <section className="section-suggestion mt-5">
        <div className="section-suggestion__title">
          <h5>Le plus populaire</h5>
        </div>

        <div className="section-suggestion__content mt-4">
          {blogs &&
            blogs.map((blogItem) => (
              <ArticleCard key={blogItem._id} {...blogItem} />
            ))}
        </div>
      </section>
    </section>
  );
};

export default DashboardHomeBody;
