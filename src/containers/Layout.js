import React, { Suspense, useEffect, lazy } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/SideBar/Sidebar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ThemedSuspense from "../components/ThemedSuspense";
import { useStateContext } from "../context/ContextProvider";
import ThemeSetting from "./ThemeSetting";
import { motion } from "framer-motion";

const Layout = ({ pageRoute, keyIndex }) => {
  const { closeSidebar } = useStateContext();

  let location = useLocation();

  useEffect(() => {
    closeSidebar();
  }, [location]);

  return (
    <div className="themeBackground themeText flex h-screen">
      <Sidebar />

      {/* app-bg-white app-border-white */}
      <div
        className={`flex w-full flex-1 flex-col overflow-y-auto overflow-x-hidden px-7 py-4`}
      >
        <Header />

        <motion.div
          className="mt-6 flex w-full flex-col"
          onClick={closeSidebar}
          initial="initial"
          animate="animate"
          key={keyIndex}
          variants={{
            initial: {
              opacity: 0,
            },
            animate: {
              opacity: 1,
            },
          }}
        >
          <Suspense fallback={<ThemedSuspense />}>{pageRoute}</Suspense>
        </motion.div>

        <ThemeSetting />

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
