import { faSearch, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import userHelpers from "@/helpers/userHelpers";
import { useCallback, useEffect, useState } from "react";

const HeaderBar = (): JSX.Element => {
  const { fetchUser } = userHelpers();
  const [username, setUsername] = useState<string>("");

  const setLocalName = (name: string) => {
    console.log(name);
    localStorage.setItem("name", name);
  };

  //get username to header
  const getUser = useCallback(async () => {
    try {
      let res = await fetchUser();
      let userName = res.user.username;
      setUsername(userName);
      setLocalName(userName);
      console.log("user obtenu: ", userName);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des informations del' utilisateur",
        error
      );
    }
  }, [setUsername]);

  useEffect(() => {
    getUser();
  }, [getUser]);

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
              <img src="/one-piece.jpg" alt="" />
              <p>{username}</p>
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
