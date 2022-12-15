import React from "react";

const Message = ({ className, children }) => {
  return (
    <p className={` ${className} text-sm font-semibold text-red-500`}>
      {children}
    </p>
  );
};

export default Message;
