const types = {
  FETCH: "weather/fetch",
  SUCCESS: "weather/success",
  FAILURE: "weather/failure",
};

const INITIAL_STATE = {
  loading: false,
  success: false,
  failure: false,
};

const weatherReducer = (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case types.FETCH:
      return {
        ...state,
        loading: true,
        success: false,
        failure: false,
      };
    case types.SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        failure: false,
      };
    case types.FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        failure: false,
      };
    default:
      return { ...state }
  }
};

export const weatherActions = {
  fetch: () => ({
    type: types.FETCH,
  }),

  success: () => ({
    type: types.SUCCESS,
  }),

  failure: () => ({
    type: types.FAILURE,
  }),
};

export default weatherReducer;
