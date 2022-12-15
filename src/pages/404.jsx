import React from "react";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { ForbiddenIcon } from "../icons";
import { useStateContext } from "../context/ContextProvider";

const NotFound = () => {
  const { currentColor } = useStateContext();

  // const AuthLogin = useSelector((state) => state.AuthLogin);
  // const { userInfo } = AuthLogin;

  return (
    <div
      className={`themeBackground themeText nav-item fixed right-0 bottom-0 top-0 left-0 h-full w-full bg-white/30 backdrop-blur-3xl `}
    >
      <div className="flex flex-col items-center">
        <i
          className={`fas fa-exclamation-circle mt-8 h-14 w-14 text-6xl  text-[${currentColor}]`}
        />
        <h1 className="my-3 text-6xl font-semibold text-gray-700 dark:text-gray-200">
          404
        </h1>
        <div className="flex text-gray-700 dark:text-gray-300">
          Page not found.{" "}
          {/* {userInfo?.validLogin ? (
            <Link to="/dashboard">
              <span className={`hover:underline text-[${currentColor}]`}>
                Go back to Dashboard
              </span>
            </Link>
          ) : (
            <Link to="/login">
              <span className={`hover:underline text-[${currentColor}]`}>
                {" "}
                Go back to Login
              </span>
            </Link>
          )} */}
          <Link to="/dashboard">
            <span className={`hover:underline text-[${currentColor}]`}>
              {" "}
              Go back to Dashboard
            </span>
          </Link>
          .
        </div>
      </div>
    </div>
  );
};

export default NotFound;
