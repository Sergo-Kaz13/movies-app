import { movieAPI } from "../api/api";

const GET_MOVIE = "GET_MOVIE";

const initialState = {
  movie: {},
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE:
      return {
        ...state,
        movie: { ...action.movie.data },
      };
    default:
      return state;
  }
};

export const setMovie = (movie) => {
  return {
    type: GET_MOVIE,
    movie,
  };
};

export const getMovie = (id) => {
  return (dispatch) => {
    movieAPI.getMovie(id).then((response) => {
      dispatch(setMovie(response));
    });
  };
};
