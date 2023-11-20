import arrayLandingHelpers from "@/helpers/arrayLandingHelpers";
import AuthDataHelper from "@/helpers/AuthDataHelper";
import metaDataHelper from "@/helpers/metaDataHelper";
import PageHeading from "@/components/PageHeading";
import AuthHelper from "@/helpers/AuthHelper";
import axios from "axios";

const CodeVerification = ({ userEmail }: {userEmail: string} ) => {
  const { navLandingData } = arrayLandingHelpers();
  const { metaData } = metaDataHelper();
  const { postCode } = AuthHelper();

  return (
    <div>
      <PageHeading title={metaData.metaTitle.codeVerification} />
      <section className="code-verification">
        <div className="code-verification__container">
          <div className="logo">
            <img src={navLandingData.logo} alt="" />
            <h4
              dangerouslySetInnerHTML={{ __html: navLandingData.logo_title }}
              className="mx-1"
            />
          </div>
          <div className="title mt-3">
            <h5>
              Nous avons envoyé un email contenant un code à 6 chiffres à
              l'adresse email : <span className="mx-3">"{userEmail}"</span>
            </h5>
          </div>

          <div className="formulaire mt-5">
            <form
              action="post"
              onSubmit={(e) => {
                e.preventDefault();
                postCode(e, userEmail);
              }}
            >
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  name="code"
                  id="exampleInputCODE1"
                  aria-describedby="emailHelp"
                  placeholder="Entrez le code à 6 chiffres ..."
                />
              </div>
              <div className="button mt-5">
                <button type="submit" className="btn">
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await axios.get("http://localhost:8000/email/getEmail");
    if (response.status === 200) {
      const emailData = response.data.email;
      return {
        props: {
          userEmail: emailData || "", 
        },
      };
    } else {
      console.error("Erreur lors de la récupération des données d'e-mail");
      return {
        props: {
          userEmail: "",
        },
      };
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des données d'e-mail :", error);
    return {
      props: {
        userEmail: "",
      },
    };
  }
}

export default CodeVerification;
