import { faSearch, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderBar = (): JSX.Element => {
  return (
    <section className="header-bar">
      <div className="header-bar__container">
        <div className="content">
          <div className="search-bar">
            <div className="input">
              <input
                type="text"
                name=""
                id=""
                placeholder="Rechercher un titre ..."
              />
            </div>
            <div className="icon-search">
              <FontAwesomeIcon icon={faSearch} className="icon" />
            </div>
          </div>
          <div className="user">
            <div className="profile">
              <img src="/banner.png" alt="" />
              <p>Loick</p>
            </div>
            <div className="icon-sort">
            <FontAwesomeIcon icon={faSortDown} className="icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderBar;
