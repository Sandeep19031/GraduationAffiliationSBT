import { Puff } from "react-loader-spinner";
import "./LoaderStyle.scss";
import React from "react";

const Loader = () => {
  return (
    <div className="loader-style">
      <Puff
        height="80"
        width="80"
        radisu={1}
        color="#62f6de"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
