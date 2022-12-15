import React from "react";
import PropTypes from "prop-types";
import Ripple from "material-ripple-effects";
import { Colors, ShadowColors } from "../../utils/Colors";

export default function DropdownLink({ children, color, ripple, ...rest }) {
  const rippleEffect = new Ripple();

  return (
    <a
      {...rest}
      className={`whitespace-no-wrap block w-full cursor-pointer rounded-md py-3 px-4 text-sm font-normal text-gray-900 hover:text-white ${Colors[color]} ${ShadowColors[color]} transition-all duration-300 ease-in hover:scale-105`}
      onMouseUp={(e) => {
        ripple === "dark" && rippleEffect.create(e, "dark");
        ripple === "light" && rippleEffect.create(e, "light");
      }}
    >
      {children}
    </a>
  );
}

DropdownLink.defaultProps = {
  color: "lightBlue",
};

DropdownLink.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  ripple: PropTypes.string,
};
