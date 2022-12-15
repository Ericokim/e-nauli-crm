import { init } from "@rematch/core";
import loadingPlugin from "@rematch/loading";
import persistPlugin from "@rematch/persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import { DashboardStats } from "./models/Dashboard";
import { models } from "./models";

// const persistConfig = {
//   key: "root",
//   storage,
// };

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  AuthLogin: { userInfo: userInfoFromStorage },
};

const store = init({
  global: true,
  models,
  plugins: [loadingPlugin({ type: "full" })],
  redux: {
    initialState: initialState,
    middlewares: [thunk],
  },
});

export default store;
