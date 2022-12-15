/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useStateContext } from "../../context/ContextProvider";

const Footer = () => {
  const { currentColor } = useStateContext();

  return (
    <footer className="relative mt-10 flex flex-1 flex-col py-2">
      <div className="absolute bottom-2">
        <p className="themeText text-start text-sm font-semibold md:text-left">
          Copyright © {new Date().getFullYear()}{" "}
          <a
            target="_blank"
            href="#"
            className={`text-sm font-semibold text-[${currentColor}] hover:text-blue-600`}
            rel="noreferrer"
          >
            E-nauli Co.
          </a>{" "}
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
