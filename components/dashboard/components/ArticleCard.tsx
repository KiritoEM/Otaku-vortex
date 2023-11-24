import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import dashboardDataHelper from "@/helpers/dashboardDataHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Iprops {
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
    <Fragment>
      <div className="cover" style={{ backgroundImage: `url("${cover}")` }}>
        <div className="date">
          <p>Sortie : {date}</p>
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
            {episodes} 
          </h6>
        </div>

        <div className="content__genre">
          <h6>
            <span>Genre</span> : {genre}
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
    </Fragment>
  );
};

export default ArticleCard;
