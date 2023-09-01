import { genresMovieListAPI } from "../api/api";

const GET_GENRES = "GET_GENRES";
const TOGGLE_GENRES_ACTIVE = "TOGGLE_GENRES_ACTIVE";

const initialState = {
  genres: [],
  genresActive: false,
};

export const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GENRES:
      return {
        ...state,
        genres: [...action.genres.genres],
      };
    case TOGGLE_GENRES_ACTIVE:
      return {
        ...state,
        genresActive: action.genresActive,
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

export const setGenresActive = (genresActive) => {
  return {
    type: TOGGLE_GENRES_ACTIVE,
    genresActive,
  };
};

export const getGenres = () => {
  return (dispatch) => {
    genresMovieListAPI.getGenresMovieList().then((response) => {
      dispatch(setGenres(response.data));
    });
  };
};

export const toggleGenresActive = (genresActive) => {
  return (dispatch) => {
    dispatch(setGenresActive(genresActive));
  };
};
