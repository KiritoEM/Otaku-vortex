import { useCallback, useEffect, useState } from "react";
import ArticleCard from "../childrenComponents/ArticleCard";
import blogHelpers from "@/helpers/blogHelpers";
import "swiper/css";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import { useRouter } from "next/router";
import mousewheel from 'swiper/core';
import  keyboard from 'swiper/core';

interface Iprops {
  image: string;
}

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

const DashboardHomeBody: React.FC<Iprops> = ({ image }): JSX.Element => {
  const router = useRouter();
  const [blogs, setBlogs] = useState<IBlogItem[]>([]);
  const { fetchBlogs } = blogHelpers();

  // Function to fetch populate blog
  const getPopularBlogs = useCallback(async () => {
    try {
      let res = await fetchBlogs();

      //sort blog to A-Z with title
      let sortedBlogs = res.blog.sort((a: any, b: any) =>
        a.title.localeCompare(b.title)
      );

      //filter popular type of affichage
      let popularBlogs = sortedBlogs.filter((blogItem: IBlogItem) =>
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
  }, [getPopularBlogs ]);

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
          <article className="swiper-container">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              
              keyboard={true}
              className="mySwiper"
            >
              {blogs &&
                blogs.map((blogItem) => (
                  <SwiperSlide
                    key={blogItem._id}
                    onClick={() => {
                      router.push(`/dashboard/anime/${blogItem._id}`);
                    }}
                  >
                    <ArticleCard {...blogItem} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </article>
        </div>
      </section>
    </section>
  );
};

export default DashboardHomeBody;
