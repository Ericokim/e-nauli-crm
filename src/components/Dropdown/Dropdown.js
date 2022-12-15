/* eslint-disable no-template-curly-in-string */
import React from "react";
import PropTypes from "prop-types";
import Ripple from "material-ripple-effects";
import Tippy from "@tippyjs/react";
import {
  filledBgColors,
  filledBgHoverColors,
  filledBgFocusColors,
  filledBgActiveColors,
  filledShadowColors,
  filledShadowHoverColors,
  outlineTextColors,
  outlineBorderColors,
  outlineBgHoverColors,
  outlineBorderHoverColors,
  outlineTextHoverColors,
  outlineBgActiveColors,
} from "../../utils/Colors";

export default function Dropdown({
  children,
  buttonText,
  color,
  buttonType,
  size = "regular",
  placement = "bottom-start",
  rounded,
  block,
  hover,
  ripple,
  className,
  icon,
  ...rest
}) {
  const [dropdownShow, setDropdownShow] = React.useState(false);
  const rippleEffect = new Ripple();

  // Styles
  let classes = [];

  rounded = rounded ? "rounded-full" : "rounded-lg";
  icon = icon ? icon : null;

  const sharedClasses = [
    hover && "transition duration-200 ease-in hover:scale-105 transform-gpu",
    block && "w-full",
    "flex",
    "items-center",
    "justify-center",
    "gap-1",
    "rounded-lg",
    "font-bold",
    "outline-none",
    "capitalize",
    "tracking-wider",
    "focus:outline-none",
    "transition-all",
    "duration-300",
    rounded,
  ];

  const buttonFilled = [
    "text-white",
    filledBgColors[color],
    filledBgHoverColors[color],
    filledBgFocusColors[color],
    filledBgActiveColors[color],
    filledShadowColors[color],
    filledShadowHoverColors[color],
  ];

  const buttonOutline = [
    "bg-transparent",
    "border",
    "border-solid",
    "shadow-none",
    outlineTextColors[color],
    outlineBorderColors[color],
    outlineBgHoverColors[color],
    outlineBorderHoverColors[color],
    outlineTextHoverColors[color],
    outlineBgHoverColors[color],
    outlineBgActiveColors[color],
  ];

  const buttonLink = [
    `bg-transparent`,
    outlineTextColors[color],
    outlineBgHoverColors[color],
    outlineTextHoverColors[color],
    outlineBgHoverColors[color],
    outlineBgActiveColors[color],
  ];

  const buttonXS = [
    ...sharedClasses,
    "py-1 pl-4 pr-2",
    "text-xs",
    "leading-normal",
  ];
  const buttonSM = [
    ...sharedClasses,
    "py-1.5 pl-5 pr-3",
    "text-sm",
    "leading-normal",
  ];
  const buttonRegular = [
    ...sharedClasses,
    "p-2.5 pl-4 pr-3",
    "text-sm",
    "leading-normal",
  ];
  const buttonLG = [
    ...sharedClasses,
    "py-3 pl-8 pr-6",
    "text-base",
    "leading-relaxed",
  ];

  if (size === "sm") {
    classes.push(...buttonSM);
  } else if (size === "lg") {
    classes.push(...buttonLG);
  } else if (size === "xs") {
    classes.push(...buttonXS);
  } else {
    classes.push(...buttonRegular);
  }

  if (buttonType === "outline") {
    classes.push(...buttonOutline);
  } else if (buttonType === "link") {
    classes.push(...buttonLink);
  } else {
    classes.push(...buttonFilled);
  }

  classes = classes.join(" ");

  // const ColorsBg = `active:bg-[${currentColor}] focus:bg-[${currentColor}] bg-[${currentColor}] hover:bg-[${currentColor}] shadow-md-[${currentColor}] hover:shadow-lg-[${currentColor}]`;

  return (
    <div>
      <Tippy
        content={
          <div
            className={`themeText themeSideBackground ring-color z-50 float-left mt-1 list-none overflow-hidden rounded-lg bg-white p-2 text-left text-base shadow-xl ring-1 transition-all duration-500`}
            style={{ minWidth: "13rem" }}
          >
            {children}
          </div>
        }
        animation="scale"
        trigger="click"
        offset={[0, 0]}
        placement={placement}
        interactive
      >
        <button
          {...rest}
          className={`${classes} ${className}`}
          type="button"
          onClick={() => setDropdownShow(!dropdownShow)}
          onMouseUp={(e) => {
            ripple === "dark" && rippleEffect.create(e, "dark");
            ripple === "light" && rippleEffect.create(e, "light");
          }}
        >
          {buttonText}
          <span className={`align-middle text-lg leading-none `}>
            {dropdownShow && !icon ? (
              <i className={`bx bx-chevron-up `} />
            ) : (
              <i className={`bx bx-chevron-down `} />
            )}
          </span>
        </button>
      </Tippy>
    </div>
  );
}

Dropdown.defaultProps = {
  color: "blueGray",
  buttonType: "filled",
  size: "regular",
  placement: "bottom-start",
  rounded: false,
  block: false,
  icon: false,
};

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  buttonText: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  placement: PropTypes.string.isRequired,
  rounded: PropTypes.bool.isRequired,
  icon: PropTypes.bool.isRequired,
  block: PropTypes.bool.isRequired,
  ripple: PropTypes.string,
};
