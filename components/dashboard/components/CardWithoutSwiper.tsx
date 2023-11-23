import { faTelevision } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import dashboardDataHelper from "@/helpers/dashboardDataHelper";

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

const CardWithoutSwiper: React.FC<Iprops> = ({
  Synopsis,
  cover,
  date,
  episodes,
  genre,
  title,
  typeAffichage,
  type_anime,
  Status,
}): JSX.Element => {
  const { dashboardHomeData } = dashboardDataHelper();
  return (
    <div className="col-4">
      <article className="box">
        <div
          className="box__cover"
          style={{ backgroundImage: `url("${cover}")` }}
        >
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
              <span>Statut</span> : {Status}
            </h6>
          </div>

          <div className="content__desc">
            <p>
              <span>Synopsis</span> : {Synopsis}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CardWithoutSwiper;
