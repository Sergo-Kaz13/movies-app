import { moviesUpcomingAPI } from "../api/api";

const GET_MOVIES_UPCOMING = "GET_MOVIES_UPCOMING";

const initialState = {
  movies: [],
};

export const sliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_UPCOMING:
      return {
        ...state,
        movies: [...action.movies],
      };
    default:
      return state;
  }
};

export const setMoviesUpcoming = (movies) => {
  return {
    type: GET_MOVIES_UPCOMING,
    movies: movies.data.results,
  };
};

export const getMoviesUpcoming = () => {
  return (dispatch) => {
    moviesUpcomingAPI.getMoviesUpcoming().then((response) => {
      dispatch(setMoviesUpcoming(response));
    });
  };
};
