import api from "../utils/api";

export const AuthLogin = {
  state: {},
  reducers: {
    USER_LOGIN_REQUEST: (state, payload) => {
      return {
        loading: true,
      };
    },
    USER_LOGIN_SUCCESS(state, payload) {
      return {
        loading: false,
        userInfo: payload,
      };
    },
    USER_LOGIN_FAIL: (state, payload) => {
      return {
        loading: false,
        error: payload.response ? payload.response.data?.error : payload.error,
      };
    },
    USER_LOGOUT: (state, payload) => {
      return {};
    },
  },
  effects: (dispatch) => {
    const { AuthLogin } = dispatch;
    return {
      async login(formData) {
        try {
          AuthLogin.USER_LOGIN_REQUEST();

          const res = await api.post(`/api/v1/auth/login`, formData);
          let dataItem = res.data.data[0];
          let data = res.data.data[0];

          if (dataItem.isLoggedIn) {
            localStorage.setItem("userInfo", JSON.stringify(dataItem));
            localStorage.setItem(
              "name",
              JSON.stringify(dataItem?.user.officialNames)
            );
            localStorage.setItem(
              "token",
              JSON.stringify(dataItem?.accessToken)
            );

            AuthLogin.USER_LOGIN_SUCCESS(dataItem);
          } else {
            dispatch.AuthLogout.logout();
          }
        } catch (error) {
          AuthLogin.USER_LOGIN_FAIL(error);
        }
      },
    };
  },
};

export const AuthResetPassword = {
  state: {},
  reducers: {
    RESET_PASSWORD_REQUEST: (state, payload) => {
      return {
        loading: true,
      };
    },
    RESET_PASSWORD_SUCCESS: (state, payload) => {
      return {
        loading: false,
        resetPasswordInfo: payload,
        success: payload.success === true ? payload.message : null,
      };
    },
    RESET_PASSWORD_FAIL: (state, payload) => {
      return {
        loading: false,
        // error: payload,
        error: payload.response
          ? payload.response.data?.message
          : payload.message,
      };
    },
  },
  effects: (dispatch) => {
    const { AuthResetPassword } = dispatch;
    return {
      async resetUserPassword(formData) {
        try {
          AuthResetPassword.RESET_PASSWORD_REQUEST();

          const { data } = await api.post(
            `/api/v1.0/auth/resetPassword`,
            formData
          );

          AuthResetPassword.RESET_PASSWORD_SUCCESS(data);
          return Promise.resolve(data);
        } catch (error) {
          AuthResetPassword.RESET_PASSWORD_FAIL(error);
        }
      },
    };
  },
};

export const AuthchangePassword = {
  state: {},
  reducers: {
    CHANGE_PASSWORD_REQUEST: (state, payload) => {
      return {
        loading: true,
      };
    },
    CHANGE_PASSWORD_SUCCESS: (state, payload) => {
      return {
        loading: false,
        changePasswordInfo: payload,
        success: payload.success === true ? payload?.message : payload.success,
      };
    },
    CHANGE_PASSWORD_FAIL: (state, payload) => {
      return {
        loading: false,
        // error: payload,
        error: payload.response ? payload.response.data?.error : payload.error,
      };
    },
  },
  effects: (dispatch) => {
    const { AuthchangePassword } = dispatch;
    return {
      async changeUserPassword(formData) {
        try {
          AuthchangePassword.CHANGE_PASSWORD_REQUEST();

          const { data } = await api.post(
            `/api/v1.0/auth/changePassword`,
            formData
          );

          AuthchangePassword.CHANGE_PASSWORD_SUCCESS(data);
          return Promise.resolve(data);
        } catch (error) {
          AuthchangePassword.CHANGE_PASSWORD_FAIL(error);
        }
      },
    };
  },
};

export const AuthLogout = {
  state: {},
  reducers: {
    USER_LOGOUT: (state, payload) => {
      return {
        logout: payload,
        success: payload.success === true ? payload.message : null,
      };
    },
    USER_LOGOUT_FAIL: (state, payload) => {
      return {
        error: payload.response ? payload.response.data?.error : payload.error,
      };
    },
  },
  effects: (dispatch) => {
    const { AuthLogout } = dispatch;
    return {
      async logout() {
        try {
          const { data } = await api.get(`/api/v1/auth/logout`);

          document.location.href = "/login";
          localStorage.clear();

          AuthLogout.USER_LOGOUT(data);
        } catch (error) {
          AuthLogout.USER_LOGOUT_FAIL(error);
        }
      },
    };
  },
};
