interface IProCardProps {
    backgroundSource: string;
    title: string;
    date: string;
    type?: string;
  }
  
  const LandingRecentCard: React.FC<IProCardProps> = ({ backgroundSource, title, date, type }: IProCardProps): JSX.Element => {
    return (
      <div className="col-12 col-md-4 col-lg-3">
        <article className="box">
          <div
            className="box__image"
            style={{ backgroundImage: `url("${backgroundSource}")` }}
          >
            <div className="sortie">
              <p>sortie : {date}</p>
            </div>
          </div>
  
          <div className="box__content">
            <div className="langue">
              <h5>VF</h5>
              <h5>VOSTFR</h5>
              {type && <h5>{type}</h5>}
            </div>
            <h4>{title}</h4>
          </div>
        </article>
      </div>
    );
  };
  
  export default LandingRecentCard;
  