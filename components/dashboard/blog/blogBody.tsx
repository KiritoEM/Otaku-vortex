import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dashboardDataHelper from "@/helpers/dashboardDataHelper";
import {
  faComment,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import CommentsCard from "../childrenComponents/commentsCard";

const BlogBody = (): JSX.Element => {
  const { dashboardHomeData } = dashboardDataHelper();

  return (
    <div className="blog__body">
      <div className="cover">
        <div className="row gx-1">
          <div className="col-4">
            <div className="section-cover">
              <img src="/list-cover.png" alt="" />
            </div>
          </div>

          <div className="col-7">
            <div className="section-content">
              <div className="title">
                <h1>Attack on titan</h1>
                <div className="date mt-1">
                  <p>
                    <b className="mx-1">Date de sortie : </b>Novembre 2023
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
                  26 episodes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="genre mt-3">
          <p>
            <b>Genre : </b>
            <span className="mx-2">Action, Aventure, Supernatural</span>
          </p>
        </div>

        <div className="status">
          <p>
            <b>Status : </b>
            <span className="mx-2">Terminé</span>
          </p>
        </div>
        <div className="synopsis">
          <p>
            <b>Synopsis : </b>{" "}
            <span className="mx-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis quasi doloribus at eligendi, non necessitatibus dolorum
              fuga alias dolores quos? Saepe, obcaecati minus molestias eius
              praesentium nostrum laboriosam corporis ut!
            </span>
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
