import React from "react";
import ReactLoading from "react-loading";

const Loader = () => {
  return (
    <div
      className="fixed inset-0 flex h-full w-full items-center justify-center transition-opacity duration-300"
      style={{ zIndex: 6000 }}
    >
      <div className="relative flex flex-col items-center justify-around">
        <ReactLoading type="bars" color="#20ad4f" height={47} width={45} />
      </div>
    </div>
  );
};

export default Loader;
