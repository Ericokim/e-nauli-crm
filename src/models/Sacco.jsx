import api from "../utils/api";

export const getSaccos = {
  state: {
    saccos: [],
    totalCount: 0,
    error: undefined,
    loading: false,
  },
  reducers: {
    REQUEST: (state, payload) => {
      return {
        ...state,
        loading: true,
      };
    },
    SUCCESS: (state, payload) => {
      return {
        loading: false,
        saccos: payload?.data,
        totalCount: payload?.count ? payload?.count : payload?.data.length,
      };
    },
    FAIL: (state, payload) => {
      return {
        loading: false,
        saccos: null,
        error: payload.response
          ? payload.response.data?.error
          : payload.message,
      };
    },
  },
  effects: (dispatch) => {
    return {
      async Saccos(params) {
        try {
          this.REQUEST();

          const { data } = await api.get(
            `/api/v1/sacco/getSaccos?offset=${params.page}&pageSize=${params.pageSize}`
          );

          this.SUCCESS(data);
        } catch (error) {
          this.FAIL(error);
        }
      },
    };
  },
};

export const addSacco = {
  state: {
    saccos: {},
  },
  reducers: {
    REQUEST: (state, payload) => {
      return {
        loading: true,
      };
    },
    SUCCESS: (state, payload) => {
      return {
        loading: false,
        saccos: payload?.data,
        success: payload.message.includes("successfully")
          ? payload.message
          : null,
      };
    },
    FAIL: (state, payload) => {
      return {
        loading: false,
        saccos: null,
        error: payload ? payload.error : payload.response.data?.message,
      };
    },
    RESET: () => {
      return {
        saccos: {},
      };
    },
  },
  effects: (dispatch) => {
    return {
      async Add(formData) {
        try {
          this.REQUEST();

          const { data } = await api.post(`/api/v1/sacco/addSacco`, formData);

          this.SUCCESS(data);
        } catch (error) {
          this.FAIL(error);
        }
      },
    };
  },
};

export const updateSacco = {
  state: {
    saccos: {},
  },
  reducers: {
    REQUEST: (state, payload) => {
      return {
        loading: true,
      };
    },
    SUCCESS: (state, payload) => {
      return {
        loading: false,
        saccos: payload?.data,
        success: payload.message.includes("successfully")
          ? payload.message
          : null,
      };
    },
    FAIL: (state, payload) => {
      return {
        loading: false,
        saccos: null,
        error: payload ? payload.message : payload.response.data?.message,
      };
    },
    RESET: () => {
      return {
        saccos: {},
      };
    },
  },
  effects: (dispatch) => {
    return {
      async Update(formData) {
        try {
          this.REQUEST();

          const { data } = await api.put(
            `/api/v1/saccos/updateSacco`,
            formData
          );

          this.SUCCESS(data);
        } catch (error) {
          this.FAIL(error);
        }
      },
    };
  },
};

export const updateSaccoStatus = {
  state: {
    saccos: {},
  },
  reducers: {
    REQUEST: (state, payload) => {
      return {
        loading: true,
      };
    },
    SUCCESS: (state, payload) => {
      return {
        loading: false,
        saccos: payload?.data,
        success: payload.status.message.includes("Successfully")
          ? payload.status.message
          : payload.data.status.message,
      };
    },
    FAIL: (state, payload) => {
      return {
        loading: false,
        saccos: null,
        error: payload.response,
      };
    },
    RESET: () => {
      return {
        saccos: {},
      };
    },
  },
  effects: (dispatch) => {
    return {
      async Status(formData) {
        try {
          this.REQUEST();

          const { data } = await api.put(
            `/api/v1/sacco/updateSaccoStatus`,
            formData
          );

          this.SUCCESS(data);
        } catch (error) {
          this.FAIL(error);
        }
      },
    };
  },
};

export const addSaccoStation = {
  state: {
    saccoStation: {},
  },
  reducers: {
    REQUEST: (state, payload) => {
      return {
        loading: true,
      };
    },
    SUCCESS: (state, payload) => {
      return {
        loading: false,
        saccoStation: payload?.data,
        success: payload.message.includes("successfully")
          ? payload.message
          : null,
      };
    },
    FAIL: (state, payload) => {
      return {
        loading: false,
        saccoStation: null,
        error: payload ? payload.error : payload.response.data?.message,
      };
    },
    RESET: () => {
      return {
        saccoStation: {},
      };
    },
  },
  effects: (dispatch) => {
    return {
      async Add(formData) {
        try {
          this.REQUEST();

          const { data } = await api.post(
            `/api/v1/sacco/addSaccoStation`,
            formData
          );

          this.SUCCESS(data);
        } catch (error) {
          this.FAIL(error);
        }
      },
    };
  },
};

export const addOfficial = {
  state: {
    saccoOfficial: {},
  },
  reducers: {
    REQUEST: (state, payload) => {
      return {
        loading: true,
      };
    },
    SUCCESS: (state, payload) => {
      return {
        loading: false,
        saccoOfficial: payload?.data,
        success: payload.message.includes("successfully")
          ? payload.message
          : null,
      };
    },
    FAIL: (state, payload) => {
      return {
        loading: false,
        saccoOfficial: null,
        error: payload ? payload.error : payload.response.data?.message,
      };
    },
    RESET: () => {
      return {
        saccoOfficial: {},
      };
    },
  },
  effects: (dispatch) => {
    return {
      async Add(formData) {
        try {
          this.REQUEST();

          const { data } = await api.post(
            `/api/v1/sacco/addSaccosOfficial`,
            formData
          );

          this.SUCCESS(data);
        } catch (error) {
          this.FAIL(error);
        }
      },
    };
  },
};

export const addCharge = {
  state: {
    saccoCharge: {},
  },
  reducers: {
    REQUEST: (state, payload) => {
      return {
        loading: true,
      };
    },
    SUCCESS: (state, payload) => {
      return {
        loading: false,
        saccoCharge: payload?.data,
        success: payload.message.includes("successfully")
          ? payload.message
          : null,
      };
    },
    FAIL: (state, payload) => {
      return {
        loading: false,
        saccoCharge: null,
        error: payload ? payload.error : payload.response.data?.message,
      };
    },
    RESET: () => {
      return {
        saccoCharge: {},
      };
    },
  },
  effects: (dispatch) => {
    return {
      async Add(formData) {
        try {
          this.REQUEST();

          const { data } = await api.post(
            `/api/v1/sacco/addSaccoCharge`,
            formData
          );

          this.SUCCESS(data);
        } catch (error) {
          this.FAIL(error);
        }
      },
    };
  },
};
