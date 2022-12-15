import api from "../utils/api";

export const getVehicles = {
  state: {
    vehicles: [],
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
        vehicles: payload?.data,
        totalCount: payload?.count ? payload?.count : payload?.data.length,
      };
    },
    FAIL: (state, payload) => {
      return {
        loading: false,
        vehicles: null,
        error: payload.response
          ? payload.response.data?.error
          : payload.message,
      };
    },
  },
  effects: (dispatch) => {
    return {
      async Vehicle(params) {
        if (params.saccoId) {
          try {
            this.REQUEST();

            const { data } = await api.get(
              `/api/v1/fleet/getVehicles?offset=${params.page}&pageSize=${params.pageSize}&saccoId=${params.saccoId}`
            );

            this.SUCCESS(data);
          } catch (error) {
            this.FAIL(error);
          }
        } else if (params.routeId) {
          try {
            this.REQUEST();

            const { data } = await api.get(
              `/api/v1/fleet/getVehicles?offset=${params.page}&pageSize=${params.pageSize}&routeId=${params.routeId}`
            );

            this.SUCCESS(data);
          } catch (error) {
            this.FAIL(error);
          }
        } else {
          try {
            this.REQUEST();

            const { data } = await api.get(
              `/api/v1/fleet/getVehicles?offset=${params.page}&pageSize=${params.pageSize}`
            );

            this.SUCCESS(data);
          } catch (error) {
            this.FAIL(error);
          }
        }
      },
    };
  },
};

export const addVehicle = {
  state: {
    vehicles: {},
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
        vehicles: payload?.data,
        success: payload.message.includes("successfully")
          ? payload.message
          : null,
      };
    },
    FAIL: (state, payload) => {
      return {
        loading: false,
        vehicles: null,
        error: payload ? payload.message : payload.response.data?.message,
      };
    },
    RESET: () => {
      return {
        vehicles: {},
      };
    },
  },
  effects: (dispatch) => {
    return {
      async Add(formData) {
        try {
          this.REQUEST();

          const { data } = await api.post(`/api/v1/fleet/addVehicle`, formData);

          this.SUCCESS(data);
        } catch (error) {
          this.FAIL(error);
        }
      },
    };
  },
};

export const updateVehicle = {
  state: {
    vehicles: {},
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
        vehicles: payload?.data,
        success: payload.message.includes("successfully")
          ? payload.message
          : null,
      };
    },
    FAIL: (state, payload) => {
      return {
        loading: false,
        vehicles: null,
        error: payload ? payload.message : payload.response.data?.message,
      };
    },
    RESET: () => {
      return {
        vehicles: {},
      };
    },
  },
  effects: (dispatch) => {
    return {
      async Update(formData) {
        try {
          this.REQUEST();

          const { data } = await api.put(
            `/api/v1/fleet/updateVehicle`,
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
