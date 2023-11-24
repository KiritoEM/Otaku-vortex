const CommentsCard = (): JSX.Element => {
  return (
    <div className="comments-card">
      <div className="user-profile">
        <img src="/logo.webp" alt="" />
        <h5>
          <b>Loick Emades</b>
        </h5>
      </div>

      <div className="coms-value">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis debitis
          suscipit blanditiis illo officia aliquam, quasi quaerat reiciendis
          ipsum cumque nam expedita a nemo fugiat ad error asperiores dicta
          saepe.
        </p>
      </div>
    </div>
  );
};

export default CommentsCard;
