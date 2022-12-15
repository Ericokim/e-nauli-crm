import axios from "axios";
import store from "../store";

// let URL = process.env.REACT_APP_API_URL;
// let KEY = process.env.REACT_APP_SERVER_KEY;
// https://e-nauli-experience-api-gbhg.vercel.app

const api = axios.create({
  baseURL: "https://e-nauli-experience-api-gbhg.vercel.app",
  headers: {
    "Content-Type": "application/json",
    Accept: "appication/json",
  },
});

// request interceptor to add the auth token header to requests
api.interceptors.request.use(
  (config) => {
    config.headers = {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      "x-server-key": "6F44EADC71C3D3DC26E7E8D8DDA41",
    };

    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);

// response interceptor to refresh token on receiving expired token
api.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    if (
      err.response.status === 401 &&
      err.response.statusText === "Unauthorized"
    ) {
      return store.dispatch.AuthLogout.logout();
    }

    return Promise.reject(err);
  }
);
export default api;
