import arrayLandingHelpers from "@/helpers/arrayLandingHelpers";

const LandingActuDescription = (): JSX.Element => {
  const { LandingActuData } = arrayLandingHelpers();
  return (
    <div className="col-6">
      <div className="section-description">
        <div className="title">
          <h1>{LandingActuData.title}</h1>
        </div>
        <div className="subtitle mt-3">
          <h4>{LandingActuData.subtitle}</h4>
        </div>
        <div className="typeS mt-3">
           <p>Nouvele série de Boruto </p>
        </div>

        <div className="comeOut">
             <h3>Sortie prévue pour: </h3>
             <p>21 Aôut 2023</p>
        </div>
      </div>
    </div>
  );
};

export default LandingActuDescription;
