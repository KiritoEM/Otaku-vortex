interface Iprops {
  title: string;
  cover: string;
}

const SectionCoverProps: React.FC<Iprops> = ({ title, cover }): JSX.Element => {
  return (
    <div
      className="section-cover-props"
      style={{ backgroundImage: `url("${cover}")` }}
    >
      <div className="title">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default SectionCoverProps;
