import { moviesAPI } from "../api/api";

const GET_MOVIES = "GET_MOVIES";
const SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE";

const initialState = {
  movies: [],
  pages: null,
  activePage: 1,
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: [...action.movies.data.results],
        pages: action.movies.data.total_pages,
      };
    case SET_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.activePage,
      };
    default:
      return state;
  }
};

export const setMovies = (movies) => {
  return {
    type: GET_MOVIES,
    movies,
  };
};

export const setActivePage = (activePage) => {
  return {
    type: SET_ACTIVE_PAGE,
    activePage,
  };
};

export const getMovies = (activePage) => {
  return (dispatch) => {
    moviesAPI.getMovies(activePage).then((response) => {
      dispatch(setMovies(response));
      dispatch(setActivePage(activePage));
    });
  };
};
