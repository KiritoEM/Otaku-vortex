import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dashboardDataHelper from "@/helpers/dashboardDataHelper";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";

const BlogBody = (): JSX.Element => {
  const { dashboardHomeData } = dashboardDataHelper();
  return (
    <div className="blog__body">
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
              {/* <div className="genre mt-3">
                <p>
                  <b className="mx-1">Genre : </b>Action, Aventure, Supernatural
                </p>
              </div> */}
              {/* <div className="synopsis mt-3">
                <p>
                  <b>Synopsis : </b>Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Blanditiis quasi doloribus at eligendi, non
                  necessitatibus dolorum fuga alias dolores quos? Saepe,
                  obcaecati minus molestias eius praesentium nostrum laboriosam
                  corporis ut!
                </p>
              </div>{" "} */}
            </div>
            <div className="reactions mt-4">
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
  );
};

export default BlogBody;
