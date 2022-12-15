/* eslint-disable no-lone-blocks */
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { useStateContext } from "../../context/ContextProvider";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Ripple from "material-ripple-effects";
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

const Tab = ({
  color,
  tabName,
  tabIcon,
  tabcontent,
  tabButtons,
  buttonType,
  size,
  rounded,
  iconOnly,
  block,
  ripple,
  className,
  hover,
  children,
  ...rest
}) => {
  let data;
  const [active, setActive] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef([]);
  const { currentColor } = useStateContext();

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[active];
      // console.log(currentTab?.offsetLeft, currentTab?.clientWidth);
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [active]);

  const rippleEffect = new Ripple();
  let classes = [];

  rounded = rounded ? "rounded-full" : "rounded-lg";

  const sharedClasses = [
    hover && "transition duration-200 ease-in hover:scale-105 transform-gpu ",
    block && "w-full",
    "flex",
    "items-center",
    "justify-center",
    "gap-1",
    "font-semibold",
    "outline-none",
    "uppercase",
    "tracking-wider",
    "focus:outline-none",
    "focus:shadow-none",
    "transition-all",
    "duration-300",
    "leading-normal",
    // "hover:bg-gray-200",
    // "dark:hover:bg-gray-600",
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
    iconOnly ? "w-6 h-6 p-0 grid place-items-center" : "py-1 px-2",
    "text-xs",
    "leading-normal",
  ];

  const buttonSM = [
    ...sharedClasses,
    iconOnly ? "w-7 h-7 p-0 grid place-items-center" : "py-1.5 px-4",
    "text-xs",
    "leading-normal",
  ];
  const buttonRegular = [
    ...sharedClasses,
    iconOnly ? "w-10 h-10 p-0 grid place-items-center" : "py-2.5 px-6",
    "text-xs",
    "leading-normal",
  ];
  const buttonLG = [
    ...sharedClasses,
    iconOnly ? "w-12 h-12 p-0 grid place-items-center" : "py-3 px-7",
    "text-sm",
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

  return (
    <div>
      <div className="relative">
        <div
          className="item-center border-color flex flex-row flex-wrap justify-between  gap-2 border-b"
          role="tablist"
        >
          <div className="flex flex-row flex-wrap gap-2 gap-x-2 space-x-3">
            {tabName.map((tab, index) => (
              <button
                {...rest}
                key={tab}
                ref={(el) => (tabsRef.current[index] = el)}
                className={`themeText ${classes} ${className} ${
                  active === index
                    ? `scale-105 transform-gpu transition-all duration-200 ease-in`
                    : `transition duration-200 ease-in`
                } `}
                style={{
                  color: `${active === index ? currentColor : ""}`,
                  opacity: `${active === index ? 1 : 0.9}`,
                }}
                onClick={(e) => setActive(index)}
                onMouseUp={(e) => {
                  ripple === "dark" && rippleEffect.create(e, "dark");
                  ripple === "light" && rippleEffect.create(e, "light");
                }}
                data-toggle="tab"
                href={`#${tabName[index]}`}
                role="tablist"
              >
                {iconOnly && tabIcon ? (
                  <i className={`${tabIcon[index]} text-xl `}></i>
                ) : (
                  <>
                    {tabIcon ? (
                      <i className={`${tabIcon[index]} mr-2 text-xl`}></i>
                    ) : null}
                    {tab}
                  </>
                )}
              </button>
            ))}
          </div>
          <div className="flex flex-row flex-wrap items-center gap-2">
            {tabButtons}
          </div>
        </div>
        <span
          className={`absolute bottom-0 block h-1 rounded-lg bg-[${currentColor}] transition-all duration-200`}
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
      </div>
      <motion.div
        className="mt-1 py-4"
        initial="initial"
        animate="animate"
        key={active}
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
        }}
      >
        {tabcontent[active]}
      </motion.div>
    </div>
  );
};

Tab.defaultProps = {
  colors: "light-blue",
};

Tab.propTypes = {
  tabIcon: PropTypes.array,
  children: PropTypes.node,
  colors: PropTypes.string.isRequired,
  tabName: PropTypes.array.isRequired,
};
// Example
{
  /* <Tab
  color="lightBlue"
  tabName={["Profile", "Settings", "Options"]}
  tabIcon={["fas fa-space-shuttle", "fas fa-cog", "fas fa-briefcase"]}
>
  <div>Test 1</div>
  <div>Test 2</div>
  <div>Test 3</div>
</Tab>; */
}

export default Tab;
