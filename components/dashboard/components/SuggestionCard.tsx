import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination } from "swiper/modules";
import dashboardDataHelper from "@/helpers/dashboardDataHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SuggestionCard = (): JSX.Element => {
  const { dashboardHomeData } = dashboardDataHelper();
  return (
    <article className="swiper-container">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={80}
        pagination={{
          clickable: true,
        }}
        autoplay
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="cover">
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
                <FontAwesomeIcon
                  icon={dashboardHomeData.biblioIcon}
                  className="mx-2"
                />{" "}
                35 episodes
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
        </SwiperSlide>
      </Swiper>
    </article>
  );
};

export default SuggestionCard;
