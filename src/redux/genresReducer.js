import { genresMovieListAPI } from "../api/api";

const GET_GENRES = "GET_GENRES";

const initialState = {
  genres: [],
};

export const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GENRES:
      return {
        ...state,
        genres: [...action.genres.genres],
      };
    default:
      return state;
  }
};

export const setGenres = (genres) => {
  return {
    type: GET_GENRES,
    genres,
  };
};

export const getGenres = () => {
  return (dispatch) => {
    genresMovieListAPI.getGenresMovieList().then((response) => {
      dispatch(setGenres(response.data));
    });
  };
};
