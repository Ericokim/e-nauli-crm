import React from "react";

const BtnLoading = ({ color }) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex items-center justify-center  gap-2  text-white">
        <span className="block h-5 w-5 animate-spin rounded-full border-2 border-dashed border-y-white"></span>
        Loading ...
      </div>
    </div>
  );
};

export default BtnLoading;
