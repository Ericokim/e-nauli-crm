import React, { useState } from "react";
import { Popover, ArrowContainer } from "react-tiny-popover";

export const PopoverItem = ({
  ref,
  align,
  children,
  Button,
  className,
  position,
}) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <div>
      <Popover
        isOpen={isPopoverOpen}
        // positions={["top", "right", "left", "bottom"]}
        positions={position}
        padding={10}
        reposition={true}
        onClickOutside={() => setIsPopoverOpen(false)}
        ref={ref}
        align={align}
        containerClassName={className}
        content={
          <div
            className={`ring-color min-w-min themeText themeSideBackground z-50 block break-words rounded-lg border-0 bg-white px-2  py-2 text-left text-sm font-normal leading-normal no-underline shadow-xl ring-1 transition-all duration-500  `}
          >
            {children}
          </div>
        }
      >
        <div onClick={() => setIsPopoverOpen(!isPopoverOpen)}>{Button}</div>
      </Popover>
    </div>
  );
};

export const PopoverBody = ({ children, className }) => {
  return (
    <div className={`themeText px-2 pb-2 font-normal ${className}`}>
      {children}
    </div>
  );
};

export const PopoverHeader = ({ children, className }) => {
  return (
    <div className={`themeText p-4 pb-2 font-bold uppercase ${className}`}>
      {children}
    </div>
  );
};
