import api from "../../services/api";

const types = {
  FETCHING: "weather/fetch",
  SUCCESS: "weather/success",
  FAILURE: "weather/failure",
};

const INITIAL_STATE = {
  loading: false,
  success: false,
  failure: false,
  data: null,
};

const weatherReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.FETCHING:
      return {
        ...state,
        loading: true,
        success: false,
        failure: false,
        data: null,
      };
    case types.SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        failure: false,
        data: payload,
      };
    case types.FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        failure: true,
        data: null,
      };
    default:
      return { ...state };
  }
};

const weatherActions = {
  fetching: () => ({
    type: types.FETCHING,
  }),

  success: (payload) => ({
    type: types.SUCCESS,
    payload,
  }),

  failure: () => ({
    type: types.FAILURE,
  }),
};

const { fetching, failure, success } = weatherActions;

export const searchForWeather = async (dispatch, data) => {
  dispatch(fetching());
  try {
    const request = await fetch(
      `${api.url}q=${data}&appid=${api.key}&units=metric&lang=pt`
    );

    if (request.status === 404) {
      dispatch(failure());
    }

    const json = await request.json();

    if (json) {
      const { name } = json;
      const { main, description } = json.weather[0];
      const { country } = json.sys;
      const { temp } = json.main;

      dispatch(
        success([
          {
            name,
            main,
            description,
            country,
            temp,
          },
        ])
      );
    }
  } catch (err) {
    console.log(err);
    dispatch(failure());
  }
};

export default weatherReducer;
