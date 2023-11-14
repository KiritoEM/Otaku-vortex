const Loader = (): JSX.Element => {
  return (
    <div className="page-loader">
      <div className="page-loader__indice">
        <div className="spinner"></div>

        <div className="title mt-3">
          <h1> Loading...please Wait</h1>
        </div>
      </div>
    </div>
  );
};

export default Loader;
