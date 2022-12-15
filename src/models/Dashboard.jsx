import api from "../utils/api";

export const DashboardStats = {
  state: {
    stats: null,
    loading: true,
    error: {},
  },
  reducers: {
    STATS_LIST_REQUEST: (state, payload) => {
      return {
        ...state,
        loading: true,
      };
    },
    STATS_LIST_SUCCESS: (state, payload) => {
      return {
        loading: false,
        stats: payload?.data,
      };
    },
    STATS_LIST_FAIL: (state, payload) => {
      return {
        loading: false,
        error: payload.response
          ? payload.response.data?.message
          : payload.message,
        stats: null,
      };
    },
  },
  effects: (dispatch) => {
    const { DashboardStats } = dispatch;
    return {
      async StatsData() {
        try {
          DashboardStats.STATS_LIST_REQUEST();

          const { data } = await api.get(`/api/v1.0/dashboard`);

          DashboardStats.STATS_LIST_SUCCESS(data);
        } catch (error) {
          DashboardStats.SET_LICENSE_FAIL(error);
        }
      },
    };
  },
};
