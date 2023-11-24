import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import blogHelpers from "@/helpers/blogHelpers";
import { Fragment } from "react";
import metaDataHelper from "@/helpers/metaDataHelper";
import PageHeading from "@/components/PageHeading";

const PostAnime = (): JSX.Element => {
  const { postBlog } = blogHelpers();
  const { metaData } = metaDataHelper();

  return (
    <Fragment>
      <PageHeading title={metaData.metaTitle.postAnimé} />
      <section className="post-anime">
        <div className="post-anime__container">
          <div className="title">
            <h2>
              <FontAwesomeIcon icon={faEnvelope} className=" mx-3" />
              Poster un Animé{" "}
            </h2>
          </div>

          <div className="formulaire mt-4">
            <form
              onSubmit={(e: any) => {
                postBlog(e);
              }}
            >
              <div className="form-group">
                <div className="row g-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="titleAnime"
                      placeholder="Titre de l' animé ..."
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="episodes"
                      placeholder="Episodes ..."
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
                      name="cover"
                      aria-describedby="emailHelp"
                      placeholder="Couverture ..."
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="type_affichage"
                      placeholder="Type d'affichage ..."
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="status"
                      placeholder="Status actuel ..."
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      name="genre"
                      placeholder="Genre ..."
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      name="synopsis"
                      className=" mt-4 form-control"
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
      </section>
    </Fragment>
  );
};

export default PostAnime;
