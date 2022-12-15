/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useLayoutEffect,
} from "react";
import useThemeMode from "../containers/ThemeMode";

// create context
const StateContext = createContext();

export const ContextProvider = ({ children, dark, usePreferences = true }) => {
  // SideBar States
  const [hover, setHover] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);

  // Theme States
  const [mode, setMode, toggleMode, currentColor, setCurrentColor, setColor] =
    useThemeMode(usePreferences);
  const [themeSettings, setThemeSettings] = useState(false);
  const [screenSize, setScreenSize] = useState(undefined);

  function toggleSidebar() {
    setActiveMenu(!activeMenu);
    // setHover(false);
  }

  function closeSidebar() {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  }

  useLayoutEffect(() => {
    if (dark) {
      if (setMode != null) {
        setMode("dark");
      }
      document.documentElement.classList.add(`dark`);
    }
  }, [dark]);

  const value = useMemo(
    () => ({
      mode,
      toggleMode,
      hover,
      setHover,
      toggleSidebar,
      closeSidebar,
      activeMenu,
      setActiveMenu,
      screenSize,
      setScreenSize,
      currentColor,
      setCurrentColor,
      setMode,
      setColor,
      themeSettings,
      setThemeSettings,
    }),
    [
      mode,
      toggleMode,
      hover,
      setHover,
      toggleSidebar,
      closeSidebar,
      activeMenu,
      setActiveMenu,
      screenSize,
      setScreenSize,
      currentColor,
      setCurrentColor,
      setMode,
      setColor,
      themeSettings,
      setThemeSettings,
    ]
  );

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
