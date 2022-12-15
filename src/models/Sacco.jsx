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
