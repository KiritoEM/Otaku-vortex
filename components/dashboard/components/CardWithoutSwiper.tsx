import { faTelevision } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardWithoutSwiper = (): JSX.Element => {
  return (
    <div className="col-4">
      <article className="box">
        <div className="box__cover">
          <div className="date">
            <p> sortie: Novembre 2023</p>
          </div>
        </div>
        <div className="content">
          <div className="content__title">
            <h5>One piece</h5>
          </div>

          <div className="content__episodes">
            <h6>
              <FontAwesomeIcon icon={faTelevision} className="mx-2" /> 35
              episodes
            </h6>
          </div>

          <div className="content__genre">
            <h6>
              <span>Genre</span> : Shonen , Shogo
            </h6>
          </div>

          <div className="content__desc">
            <p>
              <span>Synopsis</span> : Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Id, dolores sunt consequatur omnis harum
              inventore non odio doloribus nihil earum facilis quos provident?
              Magnam quidem
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CardWithoutSwiper;
