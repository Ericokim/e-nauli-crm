import React, { useState, useEffect, useContext, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import paths from "../../routes/paths";
import { useStateContext } from "../../context/ContextProvider";
import AuthLight from "../../assets/Img/Landing-Page-artwork-01.png";
import AuthDark from "../../assets/Img/Landing-Page-artwork-02.png";
import LightLogo from "../../assets/Img/E-Nauli-White-logo.png";
import DarkLogo from "../../assets/Img/E-Nauli-Grey-logo.png";
import { AtlasCopco } from "../../icons";

const Sidebar = () => {
  const {
    hover,
    setHover,
    currentColor,
    activeMenu,
    setActiveMenu,
    screenSize,
  } = useStateContext();

  const dispatch = useDispatch();

  const AuthLogin = useSelector((state) => state.AuthLogin);
  const { userInfo } = AuthLogin;

  return (
    // ${hover ? setActiveMenu(true) && "w-72" : null}
    <nav
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className={`themeSideBackground relative top-0 bottom-0 z-50 h-screen flex-row flex-nowrap items-center justify-between bg-white py-6 shadow-xl transition-all duration-300 ease-in-out ${
        activeMenu ? "fixed w-72" : "w-0"
      }`}
    >
      {activeMenu && (
        <>
          <div className="relative top-0 w-full ">
            <div className="flex flex-col items-center">
              <span
                style={{ backgroundColor: currentColor }}
                className="mx-2 flex h-24 w-24 items-center justify-center rounded-full"
              >
                <svg
                  width="35"
                  height="40"
                  viewBox="0 0 35 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M31.53 39.141C29.73 39.141 28.268 37.68 28.268 35.879V33.704C28.268 30.708 25.828 28.269 22.832 28.269H11.96C8.963 28.269 6.524 30.708 6.524 33.704V35.879C6.524 37.68 5.062 39.141 3.261 39.141C1.461 39.141 0 37.68 0 35.879V33.704C0 27.108 5.362 21.745 11.96 21.745H22.832C29.429 21.745 34.791 27.108 34.791 33.704V35.879C34.791 37.68 33.33 39.141 31.53 39.141ZM17.396 6.524C16.2 6.524 15.221 7.502 15.221 8.699C15.221 9.894 16.2 10.872 17.396 10.872C18.592 10.872 19.571 9.894 19.571 8.699C19.571 7.502 18.592 6.524 17.396 6.524ZM17.396 17.396C12.599 17.396 8.698 13.495 8.698 8.699C8.698 3.902 12.599 0 17.396 0C22.193 0 26.094 3.902 26.094 8.699C26.094 13.495 22.193 17.396 17.396 17.396Z"
                    fill="#B4E7E7"
                  />
                </svg>
              </span>

              <h4 className="themeText mx-2 mt-2 flex flex-col items-center text-sm font-semibold">
                {userInfo?.user.firstName}
              </h4>
              <h6 className="mt-1 text-sm font-medium">
                {userInfo?.user.designation[0]}
              </h6>
            </div>
          </div>
          <ul className="min-h-min left-0 top-0 bottom-0 my-20 h-3/4 overflow-y-auto overflow-x-hidden pb-2 pt-1">
            {paths.sidebar.map((route, index) => (
              <li key={index} className="rounded-full py-1 px-1 ">
                <NavLink
                  key={index}
                  to={route.path}
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : "",
                  })}
                  className={({ isActive }) =>
                    `text-md m-1 flex items-center gap-5 rounded-lg pl-4 pt-3 pb-2.5 
               ${
                 isActive
                   ? `text-white bg-[${currentColor}]`
                   : "themeText mx-2 duration-200 ease-in hover:scale-x-105 hover:bg-light-gray dark:hover:bg-gray-200 dark:hover:text-black"
               }`
                  }
                >
                  <i className={`${route.icon} text-xl`} />
                  <div className="ml-1">{route.name}</div>
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className="absolute bottom-0 flex min-w-full list-none flex-col px-2 md:pt-6">
            <li className="themeText flex flex-col items-start px-3 text-sm font-light ">
              {/* <img
                aria-hidden="true"
                className={`shadow-xs imageDark w-fit h-16 rounded-xl object-fill pl-2`}
                src={DarkLogo}
                alt="Office"
              />{" "}
              <img
                aria-hidden="true"
                className={`shadow-xs imageLight w-fit h-16 rounded-xl object-fill pl-2`}
                src={LightLogo}
                alt="Office"
              />{" "} */}
              {/* <AtlasCopco className="mb-2 w-full px-4" aria-hidden="true" /> */}
            </li>
          </ul>
        </>
      )}
    </nav>
  );
};
export default Sidebar;
