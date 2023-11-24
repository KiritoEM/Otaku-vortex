import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const postAnime = (): JSX.Element => {
  return (
    <div className="post-anime">
      <div className="post-anime__container">
        <div className="title">
          <h2>
            <FontAwesomeIcon icon={faEnvelope} className=" mx-3" />
            Poster un Animé{" "}
          </h2>
        </div>

        <div className="formulaire mt-5">
          <form
          // onSubmit={(e: any) => {
          // }}
          >
            <div className="form-group">
              <div className="row g-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="Titre de l' Animé ..."
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="genre"
                    placeholder="Genre ..."
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="couverture"
                    aria-describedby="emailHelp"
                    placeholder="Couverture ..."
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="date"
                    placeholder="Date de sortie ..."
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="type_affichage"
                    placeholder="type d' affichage ..."
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="type_affichage"
                    placeholder="Status ..."
                  />
                </div>

                <div className="col-12">
                  <textarea
                    name="synopsis"
                    className=" mt-5 form-control"
                    placeholder="Entrez le Synopsis"
                  ></textarea>
                </div>

                <div className="button mt-5">
                  <button className="btn">Envoyer</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default postAnime;
