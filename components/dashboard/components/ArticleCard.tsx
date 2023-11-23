import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Pagination } from "swiper/modules";
import dashboardDataHelper from "@/helpers/dashboardDataHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Iprops {
  Synopsis: string;
  cover: string;
  date: string;
  episodes: number;
  genre: string;
  title: string;
  typeAffichage: string[];
  type_anime: string;
  _id: string;
  Status: string;
}

const ArticleCard: React.FC<Iprops> = ({
  Synopsis,
  cover,
  date,
  episodes,
  genre,
  title,
  typeAffichage,
  type_anime,
  Status,
}) => {
  const { dashboardHomeData } = dashboardDataHelper();

  return (
    <article className="swiper-container">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={26}
        pagination={{
          clickable: true,
        }}
        autoplay
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="cover" style={{ backgroundImage: `url("${cover}")` }}>
            <div className="date">
              <p>Date de sortie : {date}</p>
            </div>
          </div>

          <div className="content">
            <div className="content__title">
              <h5>{title}</h5>
            </div>

            <div className="content__episodes">
              <h6>
                <FontAwesomeIcon
                  icon={dashboardHomeData.biblioIcon}
                  className="mx-2"
                />{" "}
                {episodes} episodes
              </h6>
            </div>

            <div className="content__genre">
              <h6>
                <span>Type</span> : {genre}
              </h6>
            </div>

            <div className="content__genre">
              <h6>
                <span>Statut</span> : ANIME {Status}
              </h6>
            </div>

            <div className="content__desc">
              <p>
                <span>Synopsis</span> : {Synopsis}
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </article>
  );
};

export default ArticleCard;
