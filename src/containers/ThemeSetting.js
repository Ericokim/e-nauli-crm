import React, { useState, useEffect, useMemo, useRef } from "react";
import { OutlineCogIcon } from "../icons";
import { Checkbox } from "../components/Input";
import {
  PopoverItem,
  PopoverHeader,
  PopoverBody,
} from "../components/Popover/Popover";
import { themeColors } from "../utils/Colors";
import { useStateContext } from "../context/ContextProvider";
import { BsCheck } from "react-icons/bs";

const ThemeSetting = () => {
  const { setColor, currentColor, mode, toggleMode } = useStateContext();

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col px-10">
      <PopoverItem
        className="themeText themeSideBackground bg-white"
        align="end"
        Button={
          <div
            className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[${currentColor}] transition duration-150 ease-in hover:rotate-45 hover:scale-105 focus:outline-none`}
          >
            <OutlineCogIcon
              className="h-8 w-8 text-gray-100"
              aria-hidden="true"
            />
          </div>
        }
      >
        <div>
          <PopoverHeader>Theme Option</PopoverHeader>
          <PopoverBody>
            <div className="flex flex-row gap-3">
              <Checkbox
                id="Light"
                color="teal"
                text="Light"
                onChange={toggleMode}
                value="light"
                checked={mode === "light"}
              />

              <Checkbox
                id="Dark"
                color="teal"
                text="Dark"
                onChange={toggleMode}
                value="dark"
                checked={mode === "dark"}
              />
            </div>
          </PopoverBody>
        </div>

        <div>
          <PopoverHeader>Theme Colors</PopoverHeader>
          <PopoverBody>
            <div className="flex gap-3">
              {themeColors.map((item, index) => (
                <div
                  className="relative mt-2 flex cursor-pointer items-center gap-5"
                  key={index}
                >
                  <button
                    type="button"
                    className={`ring-color h-10 w-10 cursor-pointer rounded-full shadow-md ring-1 transition duration-100 ease-in hover:scale-110 hover:shadow-[${item.color}] `}
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        item.color === currentColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </PopoverBody>
        </div>
      </PopoverItem>
    </div>
  );
};

export default ThemeSetting;
