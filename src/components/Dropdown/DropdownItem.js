import React from "react";
import PropTypes from "prop-types";
import Ripple from "material-ripple-effects";
import { Colors, ShadowColors } from "../../utils/Colors";
import { useStateContext } from "../../context/ContextProvider";

export default function DropdownItem({
  children,
  color,
  ripple,
  className,
  ...rest
}) {
  const rippleEffect = new Ripple();

  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked } =
    useStateContext();
  const [hover, setHover] = React.useState(false);

  const style = {
    normal: {
      boxShadow: `hover:shadow-md-${currentColor}`,
    },
    hover: {
      background: currentColor,
    },
  };

  return (
    <span
      {...rest}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      // style={{
      //   ...style.normal,
      //   ...(hover ? style.hover : null),
      // }}
      className={`whitespace-no-wrap my-1 block w-full cursor-pointer rounded-md py-3 px-4 text-sm font-normal themeText transition-all hover:bg-[${currentColor}] hover:shadow-md-[${currentColor}] duration-300 hover:text-white ease-in-out hover:scale-105`}
      onMouseUp={(e) => {
        ripple === "dark" && rippleEffect.create(e, "dark");
        ripple === "light" && rippleEffect.create(e, "light");
      }}
    >
      {children}
    </span>
  );
}

// DropdownItem.defaultProps = {
//   color: "lightBlue",
// };

DropdownItem.propTypes = {
  children: PropTypes.node.isRequired,
  //color: PropTypes.string.isRequired,
  ripple: PropTypes.string,
};
