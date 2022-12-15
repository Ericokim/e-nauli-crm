import React, { lazy, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./containers/Layout";
import { ToastNotification } from "./components/Alert";
import { useStateContext } from "./context/ContextProvider";
import paths from "./routes/paths";
import Login from "./pages/Auth/SignIn";
import ForgotPassword from "./pages/Auth/ForgotPassword";
//import ChangePassword from "./pages/Auth/ChangePassword";
import NoConnection from "./pages/NoConnection";
import NotFound from "./pages/404";

const App = () => {
  const AuthLogin = useSelector((state) => state.AuthLogin);
  const { userInfo } = AuthLogin;

  return (
    <NoConnection>
      <ToastNotification />
      <BrowserRouter>
        <Routes>
          {["/", "login"].map((path, index) => (
            <Route key={index} path={path} element={<Login />} />
          ))}
          {/* <Route path="/forgotPassword" element={<ForgotPassword />} /> */}

          {paths.public.map((item, i) => (
            <Route
              key={i}
              path={item.path}
              element={
                userInfo?.isLoggedIn ? (
                  <Layout
                    keyIndex={i}
                    pageRoute={
                      <item.element render={(props) => ({ ...props })} />
                    }
                  />
                ) : (
                  <Navigate to="/login" />
                )
                // <Layout
                //   keyIndex={i}
                //   pageRoute={
                //     <item.element render={(props) => ({ ...props })} />
                //   }
                // />
              }
            />
          ))}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </NoConnection>
  );
};

export default App;
