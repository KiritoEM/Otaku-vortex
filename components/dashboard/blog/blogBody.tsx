import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dashboardDataHelper from "@/helpers/dashboardDataHelper";
import {
  faComment,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import CommentsCard from "../childrenComponents/commentsCard";
import userHelpers from "@/helpers/userHelpers";
import React from "react";

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

const BlogBody: React.FC<IBlogItem> = ({
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
    <div className="blog__body">
      <div className="cover" style={{ backgroundImage: `url("${cover}")` }}>
        <div className="element-container">
          <div className="row gx-1">
            <div className="col-4">
              <div className="section-cover">
                <img src={cover} alt="" />
              </div>
            </div>

            <div className="col-7">
              <div className="section-content">
                <div className="title">
                  <h2>{title}</h2>
                  <div className="date mt-1">
                    <p>
                      <b className="mx-1">Date de sortie : </b>
                      {date}
                    </p>
                  </div>
                </div>
                <div className="reactions mt-3">
                  <div className="like">
                    <p>
                      <FontAwesomeIcon icon={faHeart} className="mx-2" />
                      225
                    </p>
                  </div>
                  <div className="comments">
                    <p>
                      <FontAwesomeIcon icon={faComment} className="mx-2" />
                      225
                    </p>
                  </div>
                </div>
                <div className="episodes">
                  <p>
                    {" "}
                    <FontAwesomeIcon
                      icon={dashboardHomeData.biblioIcon}
                      className="mx-2"
                    />{" "}
                    {episodes}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="genre mt-3">
          <p>
            <b>Genre : </b>
            <span className="mx-2">{genre}</span>
          </p>
        </div>

        <div className="status">
          <p>
            <b>Status : </b>
            <span className="mx-2">{Status}</span>
          </p>
        </div>
        <div className="synopsis">
          <p>
            <b>Synopsis : </b> <span className="mx-2">{Synopsis}</span>
          </p>
        </div>
      </div>

      <div className="comments">
        <div className="comments__container">
          <div className="title">
            <h4>Commentaires (5)</h4>
            <div className="line"></div>
          </div>
          <div className="comments-content">
            <CommentsCard />
            <CommentsCard />
            <CommentsCard />
          </div>

          <form action="">
            <div className="post-comments">
              <div className="input">
                <textarea
                  name=""
                  placeholder="Entrez votre commentaire ..."
                ></textarea>
              </div>
              <div className="button-send">
                <button className="btn" type="submit">
                  <FontAwesomeIcon icon={faPaperPlane} className="icon" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogBody;
