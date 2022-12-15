import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import Tippy from "@tippyjs/react";
import { roundArrow } from "tippy.js";
import { useStateContext } from "../../context/ContextProvider";

export const Popover = forwardRef(({ children, placement }, ref) => {
  const { mode } = useStateContext();

  return (
    <Tippy
      content={
        <div
          className={`themeSideBackground ring-color z-50  block w-96 max-w-6xl break-words rounded-lg border-0 bg-white  text-left text-sm font-normal leading-normal no-underline shadow-xl ring-1 ring-gray-300 transition-all duration-500 `}
        >
          {children}
        </div>
      }
      theme={`${
        mode === "dark" ? "material" : mode === "light" ? "light" : "light"
      }`}
      placement={placement}
      reference={ref}
      trigger="click"
      animation="shift-away"
      arrow={roundArrow}
      className={`${
        mode === "dark"
          ? "material"
          : mode === "light"
          ? "arrow-light"
          : "material"
      }`}
      interactive
    />
  );
});

export const PopoverBody = ({ children, className }) => {
  return (
    <div
      className={`themeText px-4 pb-4 font-normal text-gray-700 ${className}`}
    >
      {children}
    </div>
  );
};

export const PopoverHeader = ({ children, className }) => {
  return (
    <div
      className={`themeText p-4 pb-2 font-bold uppercase text-gray-900 ${className}`}
    >
      {children}
    </div>
  );
};

Popover.defaultProps = {
  placement: "top",
  size: "regular",
};

Popover.propTypes = {
  children: PropTypes.node.isRequired,
  placement: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

PopoverHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

PopoverBody.propTypes = {
  children: PropTypes.node.isRequired,
};
