import React, { useContext, useState, useEffect } from "react";
import { NavLink, useLocation, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import User from "../../assets/Img/profile.png";
import { useStateContext } from "../../context/ContextProvider";
import { Dropdown, DropdownItem } from "../Dropdown";
import { MenuIcon, OutlinePersonIcon, OutlineLogoutIcon } from "../../icons";

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const {
    toggleSidebar,
    currentColor,
    activeMenu,
    setActiveMenu,
    setScreenSize,
    screenSize,
  } = useStateContext();

  let Location = location
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace("/", "")
    .toUpperCase();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const logoutHandler = () => {
    dispatch.AuthLogout.logout();
  };

  return (
    <header className={`relative w-full py-1 md:static`}>
      <div className={`flex h-full items-center justify-between px-0`}>
        {/* <!-- Mobile hamburger --> */}
        <button
          style={{ color: currentColor }}
          className="mx-2 mr-5 -ml-1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition duration-150 ease-in hover:scale-105 hover:bg-gray-100 focus:outline-none"
          onClick={toggleSidebar}
          aria-label="Menu"
        >
          <MenuIcon className="h-6 w-6" aria-hidden="true" />
        </button>

        <div className="flex flex-1 justify-start lg:mr-32">
          <h2 className="themeText text-xl font-normal leading-9">
            {Location}
          </h2>
        </div>

        <ul className="flex flex-shrink-0 items-center ">
          <li className="relative space-x-4">
            <Dropdown
              color="gray"
              placement="bottom-start"
              buttonText={
                <img className="h-9 w-9 rounded-full" src={User} alt="user" />
              }
              buttonType="link"
              size="sm"
              rounded={false}
              block={false}
              icon={false}
              hover={false}
              ripple="light"
            >
              <DropdownItem ripple="light">
                <Link to="/profile">
                  <span className="flex items-center ">
                    <OutlinePersonIcon
                      className="mr-3 h-4 w-4"
                      aria-hidden="true"
                    />
                    Change Password
                  </span>
                </Link>
              </DropdownItem>

              <DropdownItem ripple="light">
                <span
                  onClick={() => logoutHandler()}
                  className="flex items-center"
                >
                  <OutlineLogoutIcon
                    className="mr-3 h-4 w-4"
                    aria-hidden="true"
                  />
                  <span>Log out</span>
                </span>
              </DropdownItem>
            </Dropdown>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
