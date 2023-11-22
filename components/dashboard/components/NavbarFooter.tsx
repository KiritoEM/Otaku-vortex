import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import dashboardDataHelper from "@/helpers/dashboardDataHelper";

const NavbarFooter = (): JSX.Element => {
  const { dashboardNav } = dashboardDataHelper();
  return (
    <div className="nav-footer">
      <div className="nav-footer__container">
        <div className="subtitle">
          <h5>
            Débloquer la <span className="text-warning">version Pro</span> de
            Otaku-vortex
          </h5>
        </div>

        <div className="unlock-icon mt-4">
          <DotLottiePlayer
            autoplay={true}
            loop={true}
            src={`${dashboardNav.lottie_src}`}
            className="img"
          />
        </div>
      </div>
    </div>
  );
};

export default NavbarFooter;
