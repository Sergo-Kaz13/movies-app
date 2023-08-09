import { authenticationAPI, tokenAPI } from "../api/api";

const GET_TOKEN = "GET_TOKEN";

const initialState = {
  token: null,
};

export const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export const setToken = (token) => {
  return {
    type: GET_TOKEN,
    token,
  };
};

export const getToken = () => {
  return (dispatch) => {
    tokenAPI.getToken().then((response) => {
      dispatch(setToken(response.data.request_token));
    });
  };
};
