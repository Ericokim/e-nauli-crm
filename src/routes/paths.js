import { lazy } from "react";

const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));
const Vehicles = lazy(() => import("../pages/Vehicle/Vehicle"));
const Sacco = lazy(() => import("../pages/Sacco/Sacco"));

const ChangePassword = lazy(() => import("../pages/Auth/ChangePassword"));

const paths = {
  public: [
    {
      element: Dashboard,
      path: "/dashboard",
    },

    {
      element: Sacco,
      path: "/sacco",
    },

    {
      element: Vehicles,
      path: "/fleet",
    },

    {
      element: ChangePassword,
      path: "/profile",
    },
  ],

  sidebar: [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: "bx bx-category-alt",
    },

    {
      path: "/sacco",
      name: "Sacco",
      icon: "fa fa-toolbox",
    },
  ],
};

export default paths;
